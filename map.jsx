// Interactive Leaflet map for the trip

const ROUTE_STYLES = {
  plane: { color: "#6f5fc4", weight: 2.5, dashArray: "10 6", opacity: 0.85 },
  ferry: { color: "#3e7a8c", weight: 3,   dashArray: "4 7",  opacity: 0.9 },
  train: { color: "#2d6a52", weight: 2.5, dashArray: null,   opacity: 0.85 },
  bus:   { color: "#c25a4a", weight: 2.5, dashArray: "7 4",  opacity: 0.85 },
};

const STOP_PALETTE = {
  confirmed: "#2d6a52",
  pending:   "#c69112",
  urgent:    "#c4502f",
};

// Returns compass bearing (0=N, 90=E) between two [lat,lng] points
function segmentBearing(from, to) {
  const toRad = d => d * Math.PI / 180;
  const dLng = toRad(to[1] - from[1]);
  const φ1 = toRad(from[0]), φ2 = toRad(to[0]);
  const y = Math.sin(dLng) * Math.cos(φ2);
  const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(dLng);
  return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}

function addRouteArrow(L, map, from, to, color) {
  const mid = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2];
  const bearing = segmentBearing(from, to);
  const icon = L.divIcon({
    html: `<svg width="14" height="14" viewBox="0 0 14 14" style="transform:rotate(${bearing}deg);display:block;">
      <polygon points="7,1 13,13 7,9.5 1,13" fill="${color}" opacity="0.9"/>
    </svg>`,
    className: "",
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
  L.marker(mid, { icon, interactive: false, keyboard: false }).addTo(map);
}

function TripMap() {
  const containerRef = React.useRef(null);
  const mapRef = React.useRef(null);
  const [focused, setFocused] = React.useState(null); // stop num

  React.useEffect(() => {
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    function initMap() {
      if (!containerRef.current || mapRef.current) return;
      const L = window.L;
      const map = L.map(containerRef.current, {
        scrollWheelZoom: true,
        zoomControl: true,
        attributionControl: true,
      });
      mapRef.current = map;

      // Light, low-distraction tile layer
      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OSM</a> · © <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 18,
      }).addTo(map);

      // Routes first (so markers sit on top)
      window.TRIP_DATA.MAP_ROUTES.forEach(r => {
        const s = ROUTE_STYLES[r.type];
        L.polyline([r.from, r.to], {
          color: s.color, weight: s.weight,
          dashArray: s.dashArray || undefined, opacity: s.opacity,
        }).addTo(map).bindTooltip(r.label, { sticky: true, direction: "top" });
        addRouteArrow(L, map, r.from, r.to, s.color);
      });

      // Markers
      const markers = {};
      window.TRIP_DATA.MAP_STOPS.forEach(stop => {
        const color = STOP_PALETTE[stop.status] || "#3e7a8c";
        const icon = L.divIcon({
          html: `<div class="map-pin" data-num="${stop.num}" style="--c:${color}">
            <span class="map-pin-num">${stop.num}</span>
            <span class="map-pin-ring"></span>
          </div>`,
          className: "",
          iconSize: [34, 34],
          iconAnchor: [17, 17],
          popupAnchor: [0, -22],
        });
        const m = L.marker([stop.lat, stop.lng], { icon }).addTo(map);
        const statusLabel = { confirmed: "Confirmed", pending: "Confirm", urgent: "Action needed" }[stop.status] || stop.status;
        m.bindPopup(
          `<div style="font-family:'IBM Plex Sans',system-ui,sans-serif;min-width:190px;padding:4px 2px">
            <div style="font-family:'Instrument Serif',Georgia,serif;font-weight:500;font-size:18px;color:#1f1d18;margin-bottom:6px;letter-spacing:0.01em">${stop.num}. ${stop.name}</div>
            <div style="font-size:11.5px;color:#6f6a5d;margin-bottom:3px;letter-spacing:0.02em">${stop.dates}</div>
            <div style="font-size:12.5px;color:#3a3833;margin-bottom:8px">${stop.stay}</div>
            <div style="display:inline-block;font-size:10.5px;font-weight:600;padding:2px 8px;border-radius:99px;background:${color}22;color:${color};border:1px solid ${color}44">${statusLabel}</div>
          </div>`,
          { maxWidth: 260, closeButton: false }
        );
        markers[stop.num] = m;
      });

      mapRef.current._markers = markers;

      const bounds = L.latLngBounds(window.TRIP_DATA.MAP_STOPS.map(s => [s.lat, s.lng]));
      map.fitBounds(bounds, { padding: [60, 60] });
    }

    if (window.L) initMap();
    else {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = initMap;
      document.head.appendChild(script);
    }

    return () => {
      if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; }
    };
  }, []);

  const focusStop = (num) => {
    const stop = window.TRIP_DATA.MAP_STOPS.find(s => s.num === num);
    if (!stop || !mapRef.current) return;
    setFocused(num);
    mapRef.current.flyTo([stop.lat, stop.lng], 8, { duration: 0.8 });
    const m = mapRef.current._markers?.[num];
    if (m) setTimeout(() => m.openPopup(), 600);
  };

  return (
    <div className="map-grid" style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: 16, alignItems: "stretch" }}>
      <div>
        <div ref={containerRef} style={{
          height: 580, borderRadius: 14, overflow: "hidden",
          border: "1px solid #e2dfd6", boxShadow: "0 4px 20px -10px rgba(40,30,15,0.18)",
        }} />
        <div style={{
          display: "flex", gap: 22, padding: "14px 4px 4px", flexWrap: "wrap",
          alignItems: "center", fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        }}>
          {[
            { color: "#6f5fc4", dash: "10 6", label: "Plane" },
            { color: "#3e7a8c", dash: "4 7",  label: "Ferry" },
            { color: "#2d6a52", dash: null,   label: "Train" },
            { color: "#c25a4a", dash: "7 4",  label: "Bus" },
          ].map(item => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#6f6a5d" }}>
              <svg width="28" height="10" style={{ flexShrink: 0 }}>
                <line x1="0" y1="5" x2="28" y2="5" stroke={item.color} strokeWidth="2.5" strokeDasharray={item.dash || "none"} />
              </svg>
              {item.label}
            </div>
          ))}
          <div style={{ fontSize: 11.5, color: "#a8a298", marginLeft: "auto", fontStyle: "italic" }}>
            Click a stop or pin for details
          </div>
        </div>
      </div>

      <div style={{
        background: "white", border: "1px solid #e2dfd6", borderRadius: 14,
        padding: "16px 14px", display: "flex", flexDirection: "column", gap: 4,
        maxHeight: 580, overflowY: "auto",
      }}>
        <div style={{
          fontSize: 10.5, fontWeight: 700, letterSpacing: "0.16em",
          textTransform: "uppercase", color: "#a8a298",
          fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
          padding: "0 6px 10px",
        }}>The stops</div>
        {window.TRIP_DATA.MAP_STOPS.map(stop => {
          const color = STOP_PALETTE[stop.status] || "#3e7a8c";
          const active = focused === stop.num;
          return (
            <button key={stop.num} onClick={() => focusStop(stop.num)} style={{
              display: "flex", alignItems: "flex-start", gap: 10,
              padding: "9px 8px", textAlign: "left", cursor: "pointer",
              border: "1px solid", borderColor: active ? "#d4cfbf" : "transparent",
              background: active ? "#f7f4eb" : "transparent",
              borderRadius: 9,
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              transition: "background 0.15s",
            }}>
              <span style={{
                width: 22, height: 22, borderRadius: "50%",
                background: color, color: "white",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 1,
              }}>{stop.num}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#1f1d18" }}>{stop.name}</div>
                <div style={{ fontSize: 11, color: "#8a8478", marginTop: 1 }}>{stop.dates}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DayMap({ mapData, onItemClick }) {
  const containerRef = React.useRef(null);
  const mapRef = React.useRef(null);
  const onItemClickRef = React.useRef(onItemClick);
  React.useEffect(() => { onItemClickRef.current = onItemClick; }, [onItemClick]);

  React.useEffect(() => {
    if (!mapData) return;

    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    function initMap() {
      if (!containerRef.current || mapRef.current) return;
      const L = window.L;
      const map = L.map(containerRef.current, {
        scrollWheelZoom: false, zoomControl: true, attributionControl: false,
      });
      mapRef.current = map;

      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        subdomains: "abcd", maxZoom: 18,
      }).addTo(map);

      const allPoints = [];

      // Route segments + waypoint dots
      if (mapData.route && mapData.route.length > 1) {
        for (let i = 1; i < mapData.route.length; i++) {
          const from = mapData.route[i - 1];
          const to   = mapData.route[i];
          const s = ROUTE_STYLES[to.mode] || { color: "#8a8478", weight: 2.5, dashArray: null, opacity: 0.85 };
          L.polyline([[from.lat, from.lng], [to.lat, to.lng]], {
            color: s.color, weight: s.weight,
            dashArray: s.dashArray || undefined, opacity: s.opacity,
          }).addTo(map).bindTooltip(`${from.label} → ${to.label}`, { sticky: true, direction: "top" });
          addRouteArrow(L, map, [from.lat, from.lng], [to.lat, to.lng], s.color);
        }
        mapData.route.forEach(pt => {
          L.circleMarker([pt.lat, pt.lng], {
            radius: 5, color: "white", weight: 2, fillColor: "#5b574e", fillOpacity: 0.9,
          }).addTo(map).bindTooltip(pt.label, { direction: "top" })
            .on("click", () => onItemClickRef.current?.({ type: "route", label: pt.label }));
          allPoints.push([pt.lat, pt.lng]);
        });
      }

      // Heart pin for accommodation
      if (mapData.accom) {
        const { lat, lng, name } = mapData.accom;
        const icon = L.divIcon({
          html: `<div style="width:32px;height:32px;border-radius:50%;background:#c4502f;border:2.5px solid white;box-shadow:0 2px 8px rgba(40,30,15,0.4);display:flex;align-items:center;justify-content:center;font-size:15px;color:white;line-height:1;">♥</div>`,
          className: "", iconSize: [32, 32], iconAnchor: [16, 16], popupAnchor: [0, -20],
        });
        L.marker([lat, lng], { icon }).addTo(map).bindTooltip(name, { direction: "top" })
          .on("click", () => onItemClickRef.current?.({ type: "accom", label: name }));
        allPoints.push([lat, lng]);
      }

      // Amber dots for POIs
      (mapData.pois || []).forEach(poi => {
        L.circleMarker([poi.lat, poi.lng], {
          radius: 7, color: "white", weight: 2, fillColor: "#c69112", fillOpacity: 0.85,
        }).addTo(map).bindTooltip(poi.name, { direction: "top" })
          .on("click", () => onItemClickRef.current?.({ type: "poi", label: poi.name }));
        allPoints.push([poi.lat, poi.lng]);
      });

      if (allPoints.length > 1) {
        map.fitBounds(L.latLngBounds(allPoints), { padding: [28, 28] });
      } else if (allPoints.length === 1) {
        map.setView(allPoints[0], 12);
      }
    }

    if (window.L) initMap();
    else {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = initMap;
      document.head.appendChild(script);
    }

    return () => {
      if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; }
    };
  }, [mapData]);

  if (!mapData) return null;
  return (
    <div style={{ position: "relative", height: "100%", minHeight: 260 }}>
      <div ref={containerRef} style={{ position: "absolute", inset: 0 }} />
      <div style={{
        position: "absolute", bottom: 8, left: 8, zIndex: 1000,
        display: "flex", flexDirection: "column", gap: 4,
        background: "rgba(251,250,245,0.9)", borderRadius: 8,
        padding: "6px 8px", border: "1px solid #e2dfd6",
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif", fontSize: 10.5,
        backdropFilter: "blur(4px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ color: "#c4502f", fontSize: 12 }}>♥</span>
          <span style={{ color: "#5b574e" }}>Accommodation</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#c69112", border: "1.5px solid white", display: "inline-block" }} />
          <span style={{ color: "#5b574e" }}>Point of interest</span>
        </div>
        <div style={{ color: "#a8a298", fontSize: 9.5, fontStyle: "italic", marginTop: 2 }}>Click a pin to highlight</div>
      </div>
    </div>
  );
}

Object.assign(window, { TripMap, DayMap });
