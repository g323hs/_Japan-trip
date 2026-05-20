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

function DayTimeline({ schedule }) {
  if (!schedule || !schedule.length) return null;
  const isMobile = useIsMobile();
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
          return (
            <div key={i} style={{
              position: "absolute", left: padLeft, right: 8,
              top, height,
              background: compressed
                ? `repeating-linear-gradient(135deg, ${color}1a 0 8px, ${color}24 8px 16px)`
                : bg,
              borderLeft: `3px solid ${color}`,
              borderRadius: 5,
              padding: tight ? "3px 10px" : "6px 12px",
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

function DayCard({ day, defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const isMobile = useIsMobile();
  const hasMore = day.activities.length + day.food.length + day.notes.length + (day.schedule ? day.schedule.length : 0) + (day.bookings ? day.bookings.length : 0) > 0;
  const mapData = (window.TRIP_DATA.DAY_MAPS || {})[day.id];
  const DayMapComp = window.DayMap;
  const showMap = open && !!mapData && !!DayMapComp && !isMobile;
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
        </div>
        {hasMore && (
          <div style={{
            fontSize: 11, color: "#a8a298", flexShrink: 0, paddingTop: 8,
            fontWeight: 600, fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            letterSpacing: "0.05em",
          }}>{open ? "− less" : "+ more"}</div>
        )}
      </div>
      {open && hasMore && (
        <div style={{ borderTop: "1px solid #f0ede4", display: showMap ? "grid" : "block", gridTemplateColumns: "1fr 1fr", alignItems: "stretch" }}>
          <div style={{ padding: isMobile ? "14px 14px 16px" : "16px 18px 18px 18px", background: "#fbfaf5" }}>
          {day.schedule && day.schedule.length > 0 && <DayTimeline schedule={day.schedule} />}
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
          {day.activities.length > 0 && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a8a298", marginBottom: 6, fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>Activities</div>
              {day.activities.map((a, i) => {
                const text = typeof a === "string" ? a : a.text;
                const link = typeof a === "object" ? a.url : null;
                const linkLabel = (typeof a === "object" && a.urlLabel) || "More info";
                return (
                  <div key={i} style={{ fontSize: 13.5, color: "#2a2823", padding: "3px 0", lineHeight: 1.5, display: "flex", gap: 8, alignItems: "baseline", flexWrap: "wrap" }}>
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
              {day.food.map((f, i) => (
                <div key={i} style={{ fontSize: 13.5, color: "#2a2823", padding: "3px 0", lineHeight: 1.5, display: "flex", gap: 8, alignItems: "baseline" }}>
                  <span style={{ color: "#bcb6a8" }}>—</span>
                  <span style={{ flex: 1 }}>{f}</span>
                  <MapLink query={f} loc={day.loc} />
                </div>
              ))}
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
            <div style={{ borderLeft: "1px solid #f0ede4", overflow: "hidden", borderRadius: "0 0 14px 0" }}>
              <DayMapComp mapData={mapData} />
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
  const [showMedia, setShowMedia] = React.useState(false);
  const onClick = isLocal ? async (e) => {
    e.preventDefault();
    if (isPdf || isImg) {
      setShowMedia(true);
      return;
    }
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, "_blank", "noopener");
      setTimeout(() => URL.revokeObjectURL(blobUrl), 60_000);
    } catch (err) {
      console.error("Couldn't open file:", err);
      alert("Couldn't open the file — please try again.");
    }
  } : undefined;
  return (
    <React.Fragment>
      <a href={url} target="_blank" rel="noopener noreferrer" onClick={onClick} style={{
        display: "inline-flex", alignItems: "center", gap: 5,
        fontSize: 11.5, fontWeight: 600,
        color: "#2d6a52", textDecoration: "none",
        padding: "5px 10px", borderRadius: 7,
        background: "#eef4ee", border: "1px solid #cfe0d3",
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        letterSpacing: "0.01em", whiteSpace: "nowrap",
        transition: "background 0.15s",
      }}
      onMouseEnter={e => e.currentTarget.style.background = "#dfeae2"}
      onMouseLeave={e => e.currentTarget.style.background = "#eef4ee"}
      >
        <span style={{ fontSize: 10 }}>↗</span>{label}
      </a>
      {showMedia && <MediaModal url={url} label={label} kind={isImg ? "image" : "pdf"} onClose={() => setShowMedia(false)} />}
    </React.Fragment>
  );
}

function MediaModal({ url, label, kind, onClose }) {
  const [blobUrl, setBlobUrl] = React.useState(null);
  const [err, setErr] = React.useState(null);
  React.useEffect(() => {
    let cancelled = false;
    let createdUrl = null;
    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const blob = await res.blob();
        if (cancelled) return;
        createdUrl = URL.createObjectURL(blob);
        setBlobUrl(createdUrl);
      } catch (e) {
        if (!cancelled) setErr(String(e.message || e));
      }
    })();
    return () => {
      cancelled = true;
      if (createdUrl) URL.revokeObjectURL(createdUrl);
    };
  }, [url]);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const download = () => {
    if (!blobUrl) return;
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = url.split("/").pop() || (kind === "image" ? "image.png" : "booking.pdf");
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(28,46,37,0.78)",
      backdropFilter: "blur(4px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "40px 24px",
      fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#fbfaf5", borderRadius: 14,
        width: kind === "image" ? "min(1200px, 100%)" : "min(960px, 100%)",
        height: "100%",
        display: "flex", flexDirection: "column",
        boxShadow: "0 24px 60px -20px rgba(0,0,0,0.5)",
        overflow: "hidden",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 18px", borderBottom: "1px solid #e2dfd6",
          background: "white",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              fontSize: 10.5, fontWeight: 700, letterSpacing: "0.16em",
              color: "#a8a298", textTransform: "uppercase",
            }}>{kind === "image" ? "Reference" : "Booking"}</span>
            <span style={{ fontSize: 15, color: "#1f1d18", fontWeight: 500 }}>{label}</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={download} disabled={!blobUrl} style={{
              padding: "6px 12px", borderRadius: 7,
              background: blobUrl ? "#eef4ee" : "#f3f1ec",
              color: blobUrl ? "#27583e" : "#a8a298",
              border: `1px solid ${blobUrl ? "#cfe0d3" : "#e2dfd6"}`,
              fontSize: 12, fontWeight: 600, cursor: blobUrl ? "pointer" : "default",
            }}>Download</button>
            <button onClick={onClose} style={{
              padding: "6px 12px", borderRadius: 7,
              background: "white", color: "#3a3833",
              border: "1px solid #e2dfd6", fontSize: 12, fontWeight: 600,
              cursor: "pointer",
            }}>Close ✕</button>
          </div>
        </div>
        <div style={{ flex: 1, background: kind === "image" ? "#f4f1e8" : "#2a2823", position: "relative" }}>
          {err && (
            <div style={{
              position: "absolute", inset: 0, display: "flex",
              alignItems: "center", justifyContent: "center",
              color: kind === "image" ? "#3a3833" : "#f4f1e8", flexDirection: "column", gap: 10, padding: 24,
              textAlign: "center",
            }}>
              <div style={{ fontSize: 14 }}>Couldn't load.</div>
              <div style={{ fontSize: 12, color: "#a8a298" }}>{err}</div>
            </div>
          )}
          {!err && !blobUrl && (
            <div style={{
              position: "absolute", inset: 0, display: "flex",
              alignItems: "center", justifyContent: "center",
              color: "#a8a298", fontSize: 13,
            }}>Loading…</div>
          )}
          {blobUrl && kind === "image" && (
            <div style={{ width: "100%", height: "100%", overflow: "auto", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
              <img src={blobUrl} alt={label} style={{ maxWidth: "100%", maxHeight: "100%", height: "auto", boxShadow: "0 4px 18px -6px rgba(0,0,0,0.25)", borderRadius: 6, background: "white" }} />
            </div>
          )}
          {blobUrl && kind === "pdf" && (
            <embed
              src={blobUrl}
              type="application/pdf"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  STATUS_COLORS, MODE_COLORS, MODE_ICONS, TIMELINE_COLORS, TIMELINE_LABELS,
  Badge, SecLabel, TransportLine, DayCard, DayTimeline, BookingLink, MediaModal, MapLink, GuidePopup,
  mapsSearchUrl, mapsDirectionsUrl, useIsMobile,
});
