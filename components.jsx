// Shared components: Badge, status pills, day card, section labels

// ---- Google Maps link helper ----
const cleanMapQuery = (s) => String(s || "")
  .replace(/[—–·•|]/g, " ")
  .replace(/\(.*?\)/g, " ")
  .replace(/\s*[A-Z]?\d+[A-Z]?[¥£€$]?\d*[a-z]*\s*/g, " ")     // strip prices like "1,800¥", "£36"
  .replace(/~\s*[\d,]+\s*[¥£€$]?\d*[a-z]*/g, " ")              // strip "~1,800¥"
  .replace(/\d{1,2}:\d{2}/g, " ")                              // strip clock times "07:15"
  .replace(/\b\d+\s*(min|mins|hr|hrs|hour|hours)\b/gi, " ")    // strip "39 min"
  .replace(/\s+/g, " ")
  .trim();

const mapsSearchUrl = (q, loc) => {
  const cleaned = cleanMapQuery(q);
  const tail = loc ? `, ${loc}, Japan` : ", Japan";
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cleaned + tail)}`;
};

const mapsDirectionsUrl = (from, to, loc, mode = "transit") => {
  const f = cleanMapQuery(from);
  const t = cleanMapQuery(to);
  const tail = loc ? `, ${loc}, Japan` : ", Japan";
  return `https://www.google.com/maps/dir/?api=1&travelmode=${mode}` +
    `&origin=${encodeURIComponent(f + tail)}` +
    `&destination=${encodeURIComponent(t + tail)}`;
};

function MapLink({ query, from, to, loc, mode = "transit", label = "Map", subtle = true, url: directUrl }) {
  const url = directUrl || (from && to
    ? mapsDirectionsUrl(from, to, loc, mode)
    : mapsSearchUrl(query, loc));
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
       title={from && to ? `Directions ${cleanMapQuery(from)} → ${cleanMapQuery(to)}` : `Open in Google Maps`}
       style={{
      display: "inline-flex", alignItems: "center", gap: 3,
      color: "#3e7a8c", textDecoration: "none",
      fontSize: 10.5, fontWeight: 600,
      padding: "1px 6px", borderRadius: 4,
      flexShrink: 0,
      opacity: subtle ? 0.55 : 0.9, transition: "opacity 0.15s, background 0.15s",
      letterSpacing: "0.02em",
      fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
    }}
    onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.background = "#eaf0f2"; }}
    onMouseLeave={e => { e.currentTarget.style.opacity = subtle ? "0.55" : "0.9"; e.currentTarget.style.background = "transparent"; }}
    >
      <span style={{ fontSize: 11 }}>📍</span>{label}
    </a>
  );
}

function useIsMobile(breakpoint = 760) {
  const [isMobile, setIsMobile] = React.useState(() =>
    typeof window !== "undefined" && window.innerWidth < breakpoint
  );
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isMobile;
}

const STATUS_COLORS = {
  confirmed: { bg: "#eef4ee", text: "#27583e", border: "#bcd5c2", dot: "#4a8b62" },
  pending:   { bg: "#fbf3df", text: "#7d5612", border: "#e8d59a", dot: "#c69112" },
  urgent:    { bg: "#fbe6e1", text: "#8c2a1a", border: "#e8b9ad", dot: "#c4502f" },
  gray:      { bg: "#f3f1ec", text: "#5b574e", border: "#dcd7cb", dot: "#8a8478" },
};

function Badge({ status = "gray", children, size = "sm" }) {
  const c = STATUS_COLORS[status] || STATUS_COLORS.gray;
  const padding = size === "sm" ? "3px 9px" : "5px 12px";
  const fontSize = size === "sm" ? 10.5 : 12;
  return (
    <span style={{
      background: c.bg, color: c.text, border: `1px solid ${c.border}`,
      fontSize, fontWeight: 600, padding, borderRadius: 99,
      letterSpacing: "0.02em", whiteSpace: "nowrap", flexShrink: 0,
      display: "inline-flex", alignItems: "center", gap: 5,
      fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
    }}>
      {size === "md" && <span style={{ width: 6, height: 6, borderRadius: "50%", background: c.dot }} />}
      {children}
    </span>
  );
}

function SecLabel({ children, color = "#2d6a52" }) {
  return (
    <div style={{
      fontSize: 10.5, fontWeight: 700, letterSpacing: "0.16em",
      textTransform: "uppercase", color: "#7d7a72",
      margin: "28px 0 12px", paddingLeft: 12,
      borderLeft: `3px solid ${color}`,
      fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
    }}>
      {children}
    </div>
  );
}

const MODE_ICONS = {
  plane: "✈", ferry: "⛴", train: "🚆", bus: "🚌",
  bike: "🚲", walk: "🚶", cable: "🚠", car: "🚗",
};

const MODE_COLORS = {
  plane: "#6f5fc4", ferry: "#3e7a8c", train: "#2d6a52",
  bus: "#c25a4a", bike: "#7a8a73", walk: "#8a8478", cable: "#7d5612", car: "#a85a3a",
};

const TIMELINE_COLORS = {
  plane: "#6f5fc4", ferry: "#3e7a8c", train: "#2d6a52",
  bus: "#c25a4a", bike: "#7a8a73", walk: "#a8a298", cable: "#7d5612",
  activity: "#4a7a5e", food: "#a85a3a", stay: "#2a4538", transit: "#bcb6a8",
};

const TIMELINE_LABELS = {
  plane: "Flight", ferry: "Ferry", train: "Train", bus: "Bus",
  bike: "Cycling", walk: "On foot", cable: "Cable car",
  activity: "Activity", food: "Food", stay: "Stay", transit: "Transit",
};

function DayTimeline({ schedule, highlightKey, loc, onBlockClick }) {
  if (!schedule || !schedule.length) return null;
  const isMobile = useIsMobile();
  const [hoveredBlock, setHoveredBlock] = React.useState(null);
  const labelWidth = isMobile ? 50 : 60;
  const padLeft = isMobile ? 56 : 70;
  const toMin = (t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };

  // Trim to the active range with 1hr buffer either side
  const allStart = Math.min(...schedule.map(s => toMin(s.start)));
  const allEnd = Math.max(...schedule.map(s => toMin(s.end)));
  const startHour = Math.max(0, Math.floor(allStart / 60) - 1);
  const endHour = Math.min(24, Math.ceil(allEnd / 60) + 1);
  const HOUR_HEIGHT = 52;
  const PX_PER_MIN = HOUR_HEIGHT / 60;
  const LONG_THRESHOLD = 180;        // ≥ 3h is considered "long"
  const LONG_BLOCK_HEIGHT = 86;      // max visual height for a long block
  const startMin = startHour * 60;
  const endMin = endHour * 60;

  // Per-minute height: long blocks compress so they only take LONG_BLOCK_HEIGHT
  const minuteHeight = (m) => {
    for (const it of schedule) {
      const sM = toMin(it.start);
      const eM = toMin(it.end);
      const dur = eM - sM;
      if (dur >= LONG_THRESHOLD && m >= sM && m < eM) {
        return LONG_BLOCK_HEIGHT / dur;
      }
    }
    return PX_PER_MIN;
  };

  // Cumulative pixel offsets
  const offsets = new Array(endMin - startMin + 1);
  let y = 4;
  for (let m = startMin; m <= endMin; m++) {
    offsets[m - startMin] = y;
    if (m < endMin) y += minuteHeight(m);
  }
  const totalHeight = y;
  const off = (m) => offsets[m - startMin] ?? 0;

  const isInsideLong = (minute) => schedule.some(it => {
    const sM = toMin(it.start);
    const eM = toMin(it.end);
    return (eM - sM) >= LONG_THRESHOLD && minute > sM && minute < eM;
  });

  const fmtHour = (h) => {
    if (h === 0 || h === 24) return { main: "12", suf: "am" };
    if (h === 12) return { main: "Midday", suf: "" };
    if (h < 12) return { main: String(h), suf: "am" };
    return { main: String(h - 12), suf: "pm" };
  };
  const fmtClock = (mins) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    const display = h === 0 ? 12 : h > 12 ? h - 12 : h;
    const suf = h < 12 || h === 24 ? "am" : "pm";
    return `${display}${m ? `:${m.toString().padStart(2, "0")}` : ""}${suf}`;
  };

  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{
        fontSize: 10, fontWeight: 700, textTransform: "uppercase",
        letterSpacing: "0.14em", color: "#a8a298", marginBottom: 12,
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
      }}>Day at a glance</div>
      <div style={{
        position: "relative", height: totalHeight + 6,
        background: "white", borderRadius: 10, border: "1px solid #ede9dc",
        paddingLeft: padLeft, paddingTop: 4, paddingRight: 6, paddingBottom: 4,
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
      }}>
        {Array.from({ length: endHour - startHour + 1 }, (_, i) => {
          const h = startHour + i;
          const minute = h * 60;
          if (isInsideLong(minute)) return null;
          const label = fmtHour(h);
          const top = off(minute);
          return (
            <React.Fragment key={h}>
              <div style={{
                position: "absolute", left: 0, width: labelWidth,
                top, transform: "translateY(-50%)",
                fontSize: isMobile ? 11 : 13, color: "#3a3833", fontWeight: 500,
                textAlign: "right", paddingRight: 4,
                whiteSpace: "nowrap",
              }}>
                {label.main}
                {label.suf && <span style={{ fontSize: isMobile ? 9 : 10, color: "#a8a298", marginLeft: 2 }}>{label.suf}</span>}
              </div>
              {i > 0 && (
                <div style={{
                  position: "absolute", left: labelWidth + 4, right: 6,
                  top, height: 1,
                  background: "#f0ede4",
                }} />
              )}
            </React.Fragment>
          );
        })}

        {schedule.map((it, i) => {
          const sM = toMin(it.start);
          const eM = toMin(it.end);
          const top = off(sM);
          const height = Math.max(20, off(eM) - off(sM) - 2);
          const color = TIMELINE_COLORS[it.kind] || "#7a8a73";
          const bg = `${color}1a`;
          const dur = eM - sM;
          const compressed = dur >= LONG_THRESHOLD;
          const durLabel = dur >= 60
            ? `${Math.floor(dur / 60)}h${dur % 60 ? ` ${dur % 60}m` : ""}`
            : `${dur}m`;
          const tight = height < 38;
          const isHighlighted = highlightKey && (
            highlightKey === "_stay_"
              ? it.kind === "stay"
              : it.label.toLowerCase().includes(highlightKey.toLowerCase())
          );
          const canFocus = !!onBlockClick && it.kind !== "transit";
          const hovered = hoveredBlock === i;
          return (
            <div key={i}
              onClick={canFocus ? () => onBlockClick(it) : undefined}
              onMouseEnter={() => canFocus && setHoveredBlock(i)}
              onMouseLeave={() => setHoveredBlock(null)}
              style={{
                position: "absolute", left: padLeft, right: 8,
                top, height,
                background: compressed
                  ? `repeating-linear-gradient(135deg, ${color}1a 0 8px, ${color}24 8px 16px)`
                  : bg,
                borderLeft: `3px solid ${color}`,
                borderRadius: 5,
                padding: tight ? "3px 10px" : "6px 12px",
                outline: isHighlighted ? `2px solid ${color}` : "none",
                outlineOffset: 1,
                boxShadow: isHighlighted ? `0 0 0 4px ${color}30` : "none",
                transition: "outline 0.2s, box-shadow 0.2s, filter 0.15s",
                filter: hovered ? "brightness(0.93)" : "none",
                cursor: canFocus ? "pointer" : "default",
                overflow: "hidden",
                display: "flex", flexDirection: "column",
                justifyContent: "center", gap: 1,
              }}>
              <div style={{
                fontSize: isMobile ? 11.5 : 12.5, fontWeight: 700, color,
                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                lineHeight: 1.15, letterSpacing: "0.005em",
              }}>{it.label}</div>
              {!tight && (
                <div style={{
                  fontSize: isMobile ? 10 : 11, color: "#6f6a5d",
                  whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                  lineHeight: 1.2,
                }}>
                  <span style={{ marginRight: 4 }}>🕐</span>
                  {fmtClock(sM)}–{fmtClock(eM)} · {durLabel}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DayGuide({ guide, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(28,46,37,0.72)", backdropFilter: "blur(4px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "40px 24px", fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#fbfaf5", borderRadius: 14, width: "min(640px, 100%)",
        maxHeight: "calc(100vh - 80px)", display: "flex", flexDirection: "column",
        boxShadow: "0 24px 60px -20px rgba(0,0,0,0.5)", overflow: "hidden",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 18px", borderBottom: "1px solid #e2dfd6", background: "white", flexShrink: 0,
        }}>
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.16em", color: "#a8a298", textTransform: "uppercase", marginBottom: 2 }}>Day itinerary</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: "#1f1d18" }}>{guide.title}</div>
          </div>
          <button onClick={onClose} style={{
            padding: "6px 12px", borderRadius: 7, background: "white", color: "#3a3833",
            border: "1px solid #e2dfd6", fontSize: 12, fontWeight: 600, cursor: "pointer",
          }}>Close ✕</button>
        </div>
        <div style={{ overflowY: "auto", padding: "8px 0" }}>
          {guide.stops.map((stop, i) => (
            <div key={i} style={{
              padding: "14px 20px",
              borderBottom: i < guide.stops.length - 1 ? "1px solid #f0ede4" : "none",
            }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
                <span style={{
                  width: 22, height: 22, borderRadius: "50%", background: "#2d6a52",
                  color: "white", fontSize: 11, fontWeight: 700, flexShrink: 0,
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}>{stop.num}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#1f1d18", flex: 1 }}>{stop.name}</span>
                <span style={{ fontSize: 11.5, color: "#a8a298", flexShrink: 0 }}>{stop.duration}</span>
              </div>
              <div style={{ fontSize: 13, color: "#4a4640", lineHeight: 1.6, paddingLeft: 32 }}>{stop.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GuidePopup({ guide, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(28,46,37,0.72)", backdropFilter: "blur(4px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "40px 24px", fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#fbfaf5", borderRadius: 14, width: "min(480px, 100%)",
        boxShadow: "0 24px 60px -20px rgba(0,0,0,0.5)", overflow: "hidden",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 18px", borderBottom: "1px solid #e2dfd6", background: "white",
        }}>
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.16em", color: "#a8a298", textTransform: "uppercase", marginBottom: 2 }}>Route guide</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: "#1f1d18" }}>{guide.title}</div>
          </div>
          <button onClick={onClose} style={{
            padding: "6px 12px", borderRadius: 7, background: "white", color: "#3a3833",
            border: "1px solid #e2dfd6", fontSize: 12, fontWeight: 600, cursor: "pointer",
          }}>Close ✕</button>
        </div>
        <div style={{ padding: "16px 18px 20px" }}>
          {guide.rows.map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "80px 1fr", gap: 10,
              padding: "8px 0", borderBottom: i < guide.rows.length - 1 ? "1px solid #f0ede4" : "none",
              alignItems: "baseline",
            }}>
              <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a8a298" }}>{row.label}</span>
              <span style={{ fontSize: 13.5, color: "#2a2823", lineHeight: 1.5 }}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TransportLine({ item, loc }) {
  const color = MODE_COLORS[item.mode] || "#5b574e";
  const icon = MODE_ICONS[item.mode] || "•";
  const [showGuide, setShowGuide] = React.useState(false);
  // Parse "A → B" pattern from item.text for directions link
  const arrowMatch = item.text.match(/^(.*?)\s*→\s*([^·]+?)(?:\s*·.*)?$/);
  const routeMode = item.mode === "walk" ? "walking" : item.mode === "bike" ? "bicycling" : "transit";
  // Don't show map links for flights — Google Maps can't route them
  const showMap = item.mode !== "plane";
  return (
    <div style={{ display: "flex", gap: 12, padding: "5px 0", alignItems: "flex-start" }}>
      <span style={{
        width: 26, height: 26, borderRadius: 6, flexShrink: 0,
        background: `${color}15`, color, display: "inline-flex",
        alignItems: "center", justifyContent: "center", fontSize: 14,
        marginTop: 1,
      }}>{icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 13.5, color: "#2a2823", lineHeight: 1.45,
          display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap",
        }}>
          <span style={{ flex: 1, minWidth: 0 }}>{item.text}</span>
          {item.guide && (
            <button onClick={() => setShowGuide(true)} style={{
              fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 6,
              background: "#eef0f8", color: "#3a5a8c", border: "1px solid #c8d4e8",
              cursor: "pointer", letterSpacing: "0.01em", whiteSpace: "nowrap",
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            }}>ℹ Route guide</button>
          )}
          {showMap && (arrowMatch
            ? <MapLink from={arrowMatch[1]} to={arrowMatch[2]} loc={loc} mode={routeMode} label="Route" />
            : <MapLink query={item.mapQuery || item.text} loc={loc} />
          )}
        </div>
        {item.meta && (
          <div style={{ fontSize: 12, color: "#8a8478", marginTop: 1, lineHeight: 1.4 }}>{item.meta}</div>
        )}
      </div>
      {showGuide && <GuidePopup guide={item.guide} onClose={() => setShowGuide(false)} />}
    </div>
  );
}

function RouteGuideButton({ guide }) {
  const [showGuide, setShowGuide] = React.useState(false);
  return (
    <React.Fragment>
      <div style={{ marginBottom: 6 }}>
        <button onClick={() => setShowGuide(true)} style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontSize: 12, fontWeight: 600, padding: "6px 12px", borderRadius: 7,
          background: "#eef0f8", color: "#3a5a8c", border: "1px solid #c8d4e8",
          cursor: "pointer", fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
          letterSpacing: "0.01em",
        }}>ℹ Route guide</button>
      </div>
      {showGuide && <GuidePopup guide={guide} onClose={() => setShowGuide(false)} />}
    </React.Fragment>
  );
}

function DayCard({ day, defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const isMobile = useIsMobile();
  const hasMore = day.activities.length + day.food.length + day.notes.length + (day.schedule ? day.schedule.length : 0) + (day.bookings ? day.bookings.length : 0) > 0;
  const mapData = (window.TRIP_DATA.DAY_MAPS || {})[day.id];
  const DayMapComp = window.DayMap;
  const isNarrow = useIsMobile(1000);
  const showMap = open && !!mapData && !!DayMapComp;
  const [showDayGuide, setShowDayGuide] = React.useState(false);
  const [highlightKey, setHighlightKey] = React.useState(null);
  const highlightTimer = React.useRef(null);
  const mapFocusRef = React.useRef(null);
  const handleMapItemClick = React.useCallback((item) => {
    clearTimeout(highlightTimer.current);
    setHighlightKey(item.type === "accom" ? "_stay_" : item.label);
    highlightTimer.current = setTimeout(() => setHighlightKey(null), 3500);
  }, []);
  const handleBlockClick = React.useCallback((it) => {
    mapFocusRef.current?.focus(it);
  }, []);
  const statusLabel = {
    confirmed: "Confirmed",
    pending: "To book",
    urgent: "Action needed",
  }[day.status] || day.status;

  return (
    <div style={{
      background: "white", border: "1px solid #e2dfd6", borderRadius: 14,
      marginBottom: 10, overflow: "hidden",
      boxShadow: open ? "0 4px 16px -8px rgba(40,30,15,0.12)" : "none",
      transition: "box-shadow 0.2s ease",
    }}>
      <div onClick={() => hasMore && setOpen(o => !o)}
        style={{ padding: isMobile ? "12px 14px" : "14px 18px", display: "flex", alignItems: "flex-start", gap: isMobile ? 10 : 14, cursor: hasMore ? "pointer" : "default" }}>
        <div style={{
          background: "#f4f1e8", borderRadius: 10, padding: isMobile ? "6px 8px" : "8px 10px",
          minWidth: isMobile ? 52 : 64, textAlign: "center", flexShrink: 0,
          border: "1px solid #e8e3d4",
        }}>
          <div style={{ fontSize: isMobile ? 9 : 10, color: "#a09a8a", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{day.short}</div>
          <div style={{ fontSize: isMobile ? 12 : 13, fontWeight: 700, color: "#2d2a23", marginTop: 2, fontFamily: "'Instrument Serif', Georgia, serif", letterSpacing: "0.01em" }}>{day.date}</div>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
            <span style={{
              fontSize: isMobile ? 15 : 16, fontWeight: 500, color: "#1f1d18",
              fontFamily: "'Instrument Serif', Georgia, serif", letterSpacing: "0.005em",
            }}>{day.title}</span>
            <span style={{
              fontSize: 11, background: "#eef0ea", color: "#4a5742",
              borderRadius: 99, padding: "2px 9px", fontWeight: 500,
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            }}>{day.loc}</span>
            <Badge status={day.status}>{statusLabel}</Badge>
          </div>
          {day.transport.map((t, i) => <TransportLine key={i} item={t} loc={day.loc} />)}
          {day.summary && (
            <div style={{
              fontSize: 12, color: "#7a7468", marginTop: day.transport.length ? 4 : 2,
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif", lineHeight: 1.5,
            }}>{day.summary}</div>
          )}
        </div>
        {hasMore && (
          <div style={{
            fontSize: 11, color: "#a8a298", flexShrink: 0, paddingTop: 8,
            fontWeight: 600, fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            letterSpacing: "0.05em",
          }}>{open ? "− less" : "+ more"}</div>
        )}
      </div>
      {showDayGuide && day.guide && <DayGuide guide={day.guide} onClose={() => setShowDayGuide(false)} />}
      {open && hasMore && (
        <div style={{ borderTop: "1px solid #f0ede4", display: showMap && !isNarrow ? "grid" : "block", gridTemplateColumns: "1fr 1fr", alignItems: "stretch" }}>
          <div style={{ padding: isMobile ? "14px 14px 16px" : "16px 18px 18px 18px", background: "#fbfaf5" }}>
          {day.schedule && day.schedule.length > 0 && <DayTimeline schedule={day.schedule} highlightKey={highlightKey} loc={day.loc} onBlockClick={showMap ? handleBlockClick : undefined} />}
          {day.bookings && day.bookings.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a8a298", marginBottom: 8, fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>Bookings for today</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {day.bookings.map((b, i) => (
                  <BookingLink key={i} url={b.url} label={b.label} />
                ))}
              </div>
            </div>
          )}
          {day.guide && (
            <div style={{ marginBottom: 16 }}>
              <button onClick={() => setShowDayGuide(true)} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 12, fontWeight: 600, padding: "7px 14px", borderRadius: 8,
                background: "#eef4ee", color: "#27583e", border: "1px solid #bcd5c2",
                cursor: "pointer", fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                letterSpacing: "0.01em",
              }}>
                <span>📋</span> View day itinerary guide
              </button>
            </div>
          )}
          {(day.activities.length > 0 || day.routeGuide) && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a8a298", marginBottom: 6, fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>Activities</div>
              {day.routeGuide && <RouteGuideButton guide={day.routeGuide} />}
              {day.activities.map((a, i) => {
                const text = typeof a === "string" ? a : a.text;
                const link = typeof a === "object" ? a.url : null;
                const linkLabel = (typeof a === "object" && a.urlLabel) || "More info";
                const isHighlighted = highlightKey && highlightKey !== "_stay_" && text.toLowerCase().includes(highlightKey.toLowerCase());
                return (
                  <div key={i} style={{
                    fontSize: 13.5, color: "#2a2823", padding: "3px 6px", lineHeight: 1.5,
                    display: "flex", gap: 8, alignItems: "baseline", flexWrap: "wrap",
                    borderRadius: 6, marginBottom: 1,
                    background: isHighlighted ? "#fff8e0" : "transparent",
                    outline: isHighlighted ? "1.5px solid #c69112" : "none",
                    transition: "background 0.2s, outline 0.2s",
                  }}>
                    <span style={{ color: "#bcb6a8" }}>—</span>
                    <span style={{ flex: 1, minWidth: 0 }}>{text}</span>
                    {link && <BookingLink url={link} label={linkLabel} />}
                    <MapLink query={text} loc={day.loc} />
                  </div>
                );
              })}
            </div>
          )}
          {day.food.length > 0 && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a8a298", marginBottom: 6, fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>Food & drink</div>
              {day.food.map((f, i) => {
                const isHighlighted = highlightKey && highlightKey !== "_stay_" && f.toLowerCase().includes(highlightKey.toLowerCase());
                return (
                  <div key={i} style={{
                    fontSize: 13.5, color: "#2a2823", padding: "3px 6px", lineHeight: 1.5,
                    display: "flex", gap: 8, alignItems: "baseline",
                    borderRadius: 6, marginBottom: 1,
                    background: isHighlighted ? "#fff8e0" : "transparent",
                    outline: isHighlighted ? "1.5px solid #c69112" : "none",
                    transition: "background 0.2s, outline 0.2s",
                  }}>
                    <span style={{ color: "#bcb6a8" }}>—</span>
                    <span style={{ flex: 1 }}>{f}</span>
                    <MapLink query={f} loc={day.loc} />
                  </div>
                );
              })}
            </div>
          )}
          {day.notes.length > 0 && (
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a8a298", marginBottom: 6, fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>Notes</div>
              {day.notes.map((n, i) => {
                const warn = n.startsWith("⚠️");
                return (
                  <div key={i} style={{
                    fontSize: 13.5,
                    color: warn ? "#8c2a1a" : "#2a2823",
                    padding: warn ? "8px 12px" : "3px 0",
                    background: warn ? "#fbe6e1" : "transparent",
                    border: warn ? "1px solid #e8b9ad" : "none",
                    borderRadius: warn ? 8 : 0,
                    marginBottom: warn ? 6 : 0,
                    lineHeight: 1.5,
                  }}>{n}</div>
                );
              })}
            </div>
          )}
          </div>
          {showMap && (
            <div style={{
              borderLeft: isNarrow ? "none" : "1px solid #f0ede4",
              borderTop: isNarrow ? "1px solid #f0ede4" : "none",
              overflow: "hidden",
              borderRadius: isNarrow ? "0 0 14px 14px" : "0 0 14px 0",
              height: isNarrow ? 260 : undefined,
            }}>
              <DayMapComp mapData={mapData} onItemClick={handleMapItemClick} focusRef={mapFocusRef} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ---- Booking link button + media modal (PDFs & images) ----
function BookingLink({ url, label = "View booking" }) {
  const isLocal = !/^https?:\/\//.test(url);
  const isPdf = isLocal && /\.pdf$/i.test(url);
  const isImg = isLocal && /\.(png|jpe?g|gif|webp|svg)$/i.test(url);
  const isPopup = isPdf || isImg;
  const [showMedia, setShowMedia] = React.useState(false);

  const colors = isPopup
    ? { color: "#3a5a8c", bg: "#eef0f8", border: "#c8d4e8", hover: "#dce2f0" }
    : { color: "#2d6a52", bg: "#eef4ee", border: "#cfe0d3", hover: "#dfeae2" };
  const icon = isPdf ? "📄" : isImg ? "🖼" : "↗";

  return (
    <React.Fragment>
      <a
        href={url}
        title={isPdf ? `Open PDF: ${label}` : isImg ? `View image: ${label}` : `Open in new tab: ${label}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={isPopup ? (e) => { e.preventDefault(); setShowMedia(true); } : undefined}
        style={{
          display: "inline-flex", alignItems: "center", gap: 5,
          fontSize: 11.5, fontWeight: 600, color: colors.color, textDecoration: "none",
          padding: "5px 10px", borderRadius: 7, background: colors.bg,
          border: `1px solid ${colors.border}`,
          fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
          letterSpacing: "0.01em", whiteSpace: "nowrap", transition: "background 0.15s",
        }}
        onMouseEnter={e => e.currentTarget.style.background = colors.hover}
        onMouseLeave={e => e.currentTarget.style.background = colors.bg}
      >
        <span style={{ fontSize: isPdf || isImg ? 13 : 10 }}>{icon}</span>{label}
      </a>
      {showMedia && <MediaModal url={url} label={label} kind={isImg ? "image" : "pdf"} onClose={() => setShowMedia(false)} />}
    </React.Fragment>
  );
}

function PDFViewer({ blobUrl }) {
  const containerRef = React.useRef(null);
  const [pages, setPages] = React.useState([]);
  const [err, setErr] = React.useState(null);

  React.useEffect(() => {
    if (!window.pdfjsLib) { setErr("PDF.js failed to load — check your internet connection."); return; }
    let cancelled = false;
    pdfjsLib.getDocument(blobUrl).promise.then(pdf => {
      if (cancelled) return;
      const ps = [];
      for (let i = 1; i <= pdf.numPages; i++) ps.push(pdf.getPage(i));
      return Promise.all(ps);
    }).then(resolved => {
      if (!cancelled && resolved) setPages(resolved);
    }).catch(e => { if (!cancelled) setErr(String(e.message || e)); });
    return () => { cancelled = true; };
  }, [blobUrl]);

  React.useEffect(() => {
    if (!pages.length || !containerRef.current) return;
    const width = containerRef.current.clientWidth - 40;
    pages.forEach((page, i) => {
      const canvas = containerRef.current.querySelector(`[data-page="${i}"]`);
      if (!canvas) return;
      const base = page.getViewport({ scale: 1 });
      const scale = Math.min(2, width / base.width);
      const vp = page.getViewport({ scale });
      canvas.width = vp.width;
      canvas.height = vp.height;
      page.render({ canvasContext: canvas.getContext("2d"), viewport: vp });
    });
  }, [pages]);

  if (err) return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", flexDirection: "column", gap: 8, color: "#f4f1e8", padding: 24, textAlign: "center" }}>
      <div style={{ fontSize: 14 }}>Couldn't render PDF.</div>
      <div style={{ fontSize: 12, color: "#a8a298" }}>{err}</div>
    </div>
  );
  if (!pages.length) return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#a8a298", fontSize: 13 }}>Rendering…</div>
  );
  return (
    <div ref={containerRef} style={{ overflowY: "auto", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: 20, background: "#2a2823" }}>
      {pages.map((_, i) => (
        <canvas key={i} data-page={i} style={{ maxWidth: "100%", boxShadow: "0 2px 16px rgba(0,0,0,0.5)", borderRadius: 2 }} />
      ))}
    </div>
  );
}

function MediaModal({ url, label, kind, onClose }) {
  const [blobUrl, setBlobUrl] = React.useState(null);
  const [err, setErr] = React.useState(null);

  React.useEffect(() => {
    // Images load directly without fetch; PDFs need a blob URL for Safari
    if (kind === "image") { setBlobUrl(url); return; }
    let cancelled = false;
    let created = null;
    fetch(url)
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status} — check the file exists`); return r.blob(); })
      .then(blob => {
        if (cancelled) return;
        created = URL.createObjectURL(blob);
        setBlobUrl(created);
      })
      .catch(e => { if (!cancelled) setErr(String(e.message || e)); });
    return () => {
      cancelled = true;
      if (created && kind !== "image") URL.revokeObjectURL(created);
    };
  }, [url, kind]);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(28,46,37,0.78)", backdropFilter: "blur(4px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "40px 24px", fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#fbfaf5", borderRadius: 14,
        width: kind === "image" ? "min(1200px, 100%)" : "min(960px, 100%)",
        height: "100%", display: "flex", flexDirection: "column",
        boxShadow: "0 24px 60px -20px rgba(0,0,0,0.5)", overflow: "hidden",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 18px", borderBottom: "1px solid #e2dfd6", background: "white", flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.16em", color: "#a8a298", textTransform: "uppercase" }}>
              {kind === "image" ? "Image" : "PDF"}
            </span>
            <span style={{ fontSize: 15, color: "#1f1d18", fontWeight: 500 }}>{label}</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {blobUrl && (
              <a href={blobUrl} download={url.split("/").pop()} style={{
                padding: "6px 12px", borderRadius: 7, background: "#eef4ee", color: "#27583e",
                border: "1px solid #cfe0d3", fontSize: 12, fontWeight: 600,
                textDecoration: "none", display: "inline-flex", alignItems: "center",
              }}>Download</a>
            )}
            <button onClick={onClose} style={{
              padding: "6px 12px", borderRadius: 7, background: "white", color: "#3a3833",
              border: "1px solid #e2dfd6", fontSize: 12, fontWeight: 600, cursor: "pointer",
            }}>Close ✕</button>
          </div>
        </div>
        <div style={{ flex: 1, background: kind === "image" ? "#f4f1e8" : "#2a2823", position: "relative", minHeight: 0 }}>
          {err && (
            <div style={{
              position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: 10, padding: 24, textAlign: "center",
              color: kind === "image" ? "#3a3833" : "#f4f1e8",
            }}>
              <div style={{ fontSize: 14 }}>Couldn't load file.</div>
              <div style={{ fontSize: 12, color: "#a8a298" }}>{err}</div>
              <div style={{ fontSize: 11, color: "#a8a298", marginTop: 4 }}>Make sure you're opening the page via a local server, not directly as a file.</div>
            </div>
          )}
          {!err && !blobUrl && (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#a8a298", fontSize: 13 }}>
              Loading…
            </div>
          )}
          {blobUrl && kind === "image" && (
            <div style={{ width: "100%", height: "100%", overflow: "auto", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
              <img src={blobUrl} alt={label}
                onError={() => setErr("Image failed to load")}
                style={{ maxWidth: "100%", maxHeight: "100%", height: "auto", boxShadow: "0 4px 18px -6px rgba(0,0,0,0.25)", borderRadius: 6, background: "white" }}
              />
            </div>
          )}
          {blobUrl && kind === "pdf" && <PDFViewer blobUrl={blobUrl} />}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  STATUS_COLORS, MODE_COLORS, MODE_ICONS, TIMELINE_COLORS, TIMELINE_LABELS,
  Badge, SecLabel, TransportLine, DayCard, DayTimeline, BookingLink, MediaModal, PDFViewer, MapLink, GuidePopup, DayGuide, RouteGuideButton,
  mapsSearchUrl, mapsDirectionsUrl, useIsMobile,
});
