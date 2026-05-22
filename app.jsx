// Main app — header, tabs, content
(function() {
const { useState, useEffect, useMemo } = React;
const { URGENT, DAYS, FLIGHTS, FERRIES, GROUND, STAYS, GEORGE, PHASES, TRIP } = window.TRIP_DATA;

// ---- Countdown ----
function useDaysToGo() {
  return useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(TRIP.start);
    return Math.max(0, Math.ceil((start - today) / 86400000));
  }, []);
}

// ---- Header ----
function Header({ daysToGo }) {
  const isMobile = useIsMobile();
  return (
    <div style={{
      background: "linear-gradient(180deg, #1c2e25 0%, #243a30 100%)",
      padding: isMobile ? "22px 18px 18px" : "32px 24px 28px",
      borderBottom: "1px solid #15201a",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle texture */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at 80% 20%, rgba(196,80,47,0.08) 0%, transparent 50%)",
        pointerEvents: "none",
      }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: isMobile ? 14 : 24, position: "relative" }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{
            fontSize: isMobile ? 10 : 11, color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: isMobile ? 6 : 8,
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif", fontWeight: 500,
          }}>Summer 2026 · 23 days</div>
          <div style={{
            color: "#f4f1e8", fontSize: isMobile ? 28 : 44, fontWeight: 400, lineHeight: 1.05,
            fontFamily: "'Instrument Serif', Georgia, serif", letterSpacing: "-0.01em",
          }}>Japan, beginning to end.</div>
          {!isMobile && (
            <div style={{
              color: "rgba(255,255,255,0.6)", fontSize: 14, marginTop: 12,
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            }}>
              <span style={{ color: "#e8c89a" }}>LHR</span> → Delhi → <span style={{ color: "#e8c89a" }}>Tokyo</span> → Wakkanai → Rishiri → Rebun → Asahikawa → Furano → Sapporo → Chitose → <span style={{ color: "#e8c89a" }}>Tokyo</span> → Delhi → <span style={{ color: "#e8c89a" }}>LHR</span>
            </div>
          )}
        </div>

        {/* Hanko-style stamp */}
        <div style={{
          flexShrink: 0,
          width: isMobile ? 80 : 116, height: isMobile ? 80 : 116, borderRadius: "50%",
          background: "linear-gradient(135deg, #c4502f 0%, #a83e22 100%)",
          border: isMobile ? "2px solid #f4f1e8" : "3px solid #f4f1e8",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          boxShadow: "0 6px 24px -6px rgba(196,80,47,0.5), inset 0 -2px 8px rgba(0,0,0,0.15)",
          transform: "rotate(-6deg)",
          color: "#f4f1e8",
        }}>
          <div style={{
            fontSize: isMobile ? 7.5 : 9.5, letterSpacing: "0.2em", opacity: 0.85,
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif", fontWeight: 600,
          }}>DAYS TO GO</div>
          <div style={{
            fontSize: isMobile ? 30 : 44, fontWeight: 400, lineHeight: 1,
            fontFamily: "'Instrument Serif', Georgia, serif", marginTop: 2,
          }}>{daysToGo}</div>
          <div style={{
            fontSize: isMobile ? 7 : 9, letterSpacing: "0.18em", opacity: 0.75, marginTop: isMobile ? 2 : 4,
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
          }}>7 JUL · 21:05</div>
        </div>
      </div>

      {/* Trip phases strip */}
      <div style={{
        maxWidth: 1100, margin: isMobile ? "18px auto 0" : "28px auto 0",
        display: "flex", gap: isMobile ? 4 : 6,
        overflowX: isMobile ? "auto" : "visible",
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
      }}>
        {PHASES.map(p => {
          const days = DAYS.filter(d => d.phase === p.id).length;
          const flex = Math.max(1, days);
          return (
            <div key={p.id} style={{
              flex: isMobile ? `0 0 ${Math.max(90, flex * 22)}px` : flex,
              background: "rgba(255,255,255,0.06)",
              borderTop: `2px solid ${p.color}`,
              padding: "8px 10px", borderRadius: "0 0 6px 6px",
              minWidth: 0,
            }}>
              <div style={{ fontSize: isMobile ? 10.5 : 11, color: "#f4f1e8", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.label}</div>
              <div style={{ fontSize: isMobile ? 9.5 : 10, color: "rgba(255,255,255,0.5)", marginTop: 1 }}>{p.dates}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---- Action items panel ----
function ActionPanel() {
  const [done, setDone] = useState(() => {
    try { return JSON.parse(localStorage.getItem("jp-action-done") || "{}"); }
    catch { return {}; }
  });
  const toggle = (i) => {
    const next = { ...done, [i]: !done[i] };
    setDone(next);
    localStorage.setItem("jp-action-done", JSON.stringify(next));
  };
  const remaining = URGENT.filter((_, i) => !done[i]).length;

  return (
    <div style={{
      background: "white", border: "1px solid #e2dfd6", borderRadius: 14,
      margin: "24px 0", overflow: "hidden",
      boxShadow: "0 4px 20px -10px rgba(40,30,15,0.12)",
    }}>
      <div style={{
        padding: "16px 20px", borderBottom: "1px solid #efeadc",
        background: "linear-gradient(180deg, #fdfbf4 0%, #faf6e9 100%)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <div style={{
            fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#a8a298", fontWeight: 600,
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif", marginBottom: 4,
          }}>Action needed</div>
          <div style={{
            fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 22, color: "#1f1d18",
          }}>
            {remaining === 0 ? "All clear — nice work." : `${remaining} thing${remaining === 1 ? "" : "s"} still on your plate.`}
          </div>
        </div>
        <div style={{
          padding: "6px 14px", background: remaining === 0 ? "#eef4ee" : "#fbe6e1",
          color: remaining === 0 ? "#27583e" : "#8c2a1a",
          border: `1px solid ${remaining === 0 ? "#bcd5c2" : "#e8b9ad"}`,
          borderRadius: 99, fontSize: 12, fontWeight: 600,
          fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        }}>
          {URGENT.length - remaining} / {URGENT.length} done
        </div>
      </div>
      <div>
        {URGENT.map((u, i) => {
          const c = STATUS_COLORS[u.type] || STATUS_COLORS.pending;
          const isDone = !!done[i];
          return (
            <div key={i} style={{
              padding: "14px 20px",
              borderBottom: i < URGENT.length - 1 ? "1px solid #f0ede4" : "none",
              background: isDone ? "#fafaf7" : "white",
              display: "flex", gap: 14, alignItems: "flex-start",
              opacity: isDone ? 0.55 : 1, transition: "all 0.2s",
            }}>
              <button onClick={() => toggle(i)} style={{
                width: 22, height: 22, flexShrink: 0, marginTop: 1,
                borderRadius: 6, border: `1.5px solid ${isDone ? "#4a8b62" : c.border}`,
                background: isDone ? "#4a8b62" : "white",
                cursor: "pointer", display: "inline-flex",
                alignItems: "center", justifyContent: "center", padding: 0,
                color: "white", fontSize: 13, fontWeight: 700,
              }}>{isDone ? "✓" : ""}</button>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 3 }}>
                  <span style={{
                    fontSize: 14, fontWeight: 600, color: "#1f1d18",
                    textDecoration: isDone ? "line-through" : "none",
                    fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                  }}>{u.title}</span>
                  <Badge status={u.type}>{u.deadline}</Badge>
                </div>
                <div style={{
                  fontSize: 13, color: "#6f6a5d", lineHeight: 1.5,
                  fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                }}>{u.body}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---- Booking link (defined in components.jsx and assigned to window) ----

// ---- Today helpers ----
function findTodayEntry() {
  const today = new Date(); today.setHours(0,0,0,0);
  const Y = new Date(TRIP.start).getFullYear();
  const MON = { Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11 };
  function startOf(str) {
    const m = str.match(/^(\d+)(?:[–\-]\d+)?\s+(\w+)$/);
    return m ? new Date(Y, MON[m[2]], +m[1]) : null;
  }
  let result = null;
  for (const d of DAYS) {
    const s = startOf(d.date);
    if (s && s <= today) result = d; else if (s && s > today) break;
  }
  return result;
}

// ---- Today tab ----
function TodayTab() {
  const IBM = "'IBM Plex Sans', system-ui, sans-serif";
  const SERIF = "'Instrument Serif', Georgia, serif";
  const isMobile = useIsMobile();

  const today = useMemo(() => { const d = new Date(); d.setHours(0,0,0,0); return d; }, []);
  const tripStart = useMemo(() => { const d = new Date(TRIP.start); d.setHours(0,0,0,0); return d; }, []);
  const tripEnd   = useMemo(() => { const d = new Date(TRIP.end);   d.setHours(0,0,0,0); return d; }, []);

  const daysToGo  = Math.ceil((tripStart - today) / 86400000);
  const tripDay   = Math.floor((today - tripStart) / 86400000) + 1;
  const totalDays = Math.ceil((tripEnd - tripStart) / 86400000) + 1;

  const isBefore = today < tripStart;
  const isDuring = today >= tripStart && today <= tripEnd;

  if (isBefore) {
    return (
      <div>
        <div style={{
          background: "white", border: "1px solid #e2dfd6", borderRadius: 14,
          padding: isMobile ? "36px 20px" : "52px 48px", textAlign: "center",
          marginBottom: 16, boxShadow: "0 4px 20px -10px rgba(40,30,15,0.12)",
        }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a8a298", fontFamily: IBM, marginBottom: 14 }}>Days until departure</div>
          <div style={{ fontSize: isMobile ? 96 : 128, fontFamily: SERIF, color: "#1f1d18", lineHeight: 1, marginBottom: 10 }}>{daysToGo}</div>
          <div style={{ fontSize: 15, color: "#6f6a5d", fontFamily: IBM }}>7 Jul – 29 Jul 2026</div>
        </div>
        <div style={{ marginBottom: 16 }}>
          {PHASES.map(p => (
            <div key={p.id} style={{
              display: "flex", alignItems: "center", gap: 12, padding: "10px 16px",
              background: "white", border: "1px solid #e2dfd6", borderRadius: 10, marginBottom: 6,
              fontFamily: IBM,
            }}>
              <div style={{ width: 3, alignSelf: "stretch", borderRadius: 2, background: p.color, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: "#1f1d18" }}>{p.label}</div>
                <div style={{ fontSize: 12, color: "#8a8478", marginTop: 1 }}>{p.dates}</div>
              </div>
            </div>
          ))}
        </div>
        <ActionPanel />
      </div>
    );
  }

  if (isDuring) {
    const todayEntry = findTodayEntry();
    const idx = DAYS.findIndex(d => d.id === todayEntry?.id);
    const tomorrowEntry = idx >= 0 && idx < DAYS.length - 1 ? DAYS[idx + 1] : null;
    const phase = PHASES.find(p => p.id === todayEntry?.phase);
    return (
      <div>
        <div style={{
          background: "white", border: "1px solid #e2dfd6", borderRadius: 14,
          padding: isMobile ? "18px 16px" : "22px 28px", marginBottom: 14,
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
          boxShadow: "0 4px 20px -10px rgba(40,30,15,0.12)",
        }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a8a298", fontFamily: IBM, marginBottom: 6 }}>Today</div>
            <div style={{ fontFamily: SERIF, fontSize: isMobile ? 26 : 34, color: "#1f1d18", lineHeight: 1.1 }}>
              Day {tripDay} <span style={{ color: "#bcb6a8", fontSize: isMobile ? 17 : 22 }}>of {totalDays}</span>
            </div>
            {phase && (
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: phase.color }} />
                <span style={{ fontSize: 12, color: "#6f6a5d", fontFamily: IBM }}>{phase.label}</span>
              </div>
            )}
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: SERIF, fontSize: isMobile ? 18 : 24, color: "#1f1d18" }}>
              {today.toLocaleDateString("en-GB", { weekday: "long" })}
            </div>
            <div style={{ fontSize: 12.5, color: "#8a8478", fontFamily: IBM, marginTop: 2 }}>
              {today.toLocaleDateString("en-GB", { day: "numeric", month: "long" })}
            </div>
          </div>
        </div>
        {todayEntry ? <DayCard day={todayEntry} defaultOpen /> : (
          <div style={{ padding: "24px", textAlign: "center", color: "#8a8478", fontFamily: IBM }}>No day entry found for today.</div>
        )}
        {tomorrowEntry && (
          <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a8a298", marginBottom: 8, fontFamily: IBM }}>Tomorrow</div>
            <DayCard day={tomorrowEntry} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{
      background: "white", border: "1px solid #e2dfd6", borderRadius: 14,
      padding: isMobile ? "48px 20px" : "72px 48px", textAlign: "center",
      boxShadow: "0 4px 20px -10px rgba(40,30,15,0.12)",
    }}>
      <div style={{ fontSize: isMobile ? 56 : 80, marginBottom: 16 }}>🎌</div>
      <div style={{ fontFamily: SERIF, fontSize: isMobile ? 28 : 40, color: "#1f1d18", marginBottom: 10 }}>Trip complete.</div>
      <div style={{ fontSize: 14, color: "#6f6a5d", fontFamily: IBM }}>29 Jul 2026 · London bound.</div>
    </div>
  );
}

// ---- Tabs ----
function Tabs({ tab, setTab }) {
  const TABS = [
    { id: "today",     label: "Today" },
    { id: "map",       label: "Map" },
    { id: "days",      label: "Days" },
    { id: "transport", label: "Transport" },
    { id: "stays",     label: "Stays" },
    { id: "money",     label: "General costs" },
  ];
  const isMobile = useIsMobile();
  const bleed = isMobile ? 14 : 24;
  return (
    <div style={{
      display: "flex", gap: 4, borderBottom: "1px solid #e2dfd6",
      marginBottom: 24, overflowX: "auto",
      fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
      position: "sticky", top: 0, zIndex: 50,
      background: "#f4f1e8",
      marginLeft: -bleed, marginRight: -bleed,
      paddingLeft: bleed, paddingRight: bleed,
    }}>
      {TABS.map(t => (
        <button key={t.id} onClick={() => setTab(t.id)} style={{
          padding: "12px 18px", fontSize: 13.5,
          fontWeight: tab === t.id ? 600 : 500,
          border: "none", background: "none", cursor: "pointer",
          color: tab === t.id ? "#1c2e25" : "#8a8478",
          borderBottom: `2px solid ${tab === t.id ? "#c4502f" : "transparent"}`,
          marginBottom: -1, whiteSpace: "nowrap", letterSpacing: "0.01em",
        }}>{t.label}</button>
      ))}
    </div>
  );
}

// ---- Tab views ----
function DaysTab() {
  return (
    <div>
      <SecLabel color="#7a8a73">Outbound · London to Tokyo</SecLabel>
      {DAYS.filter(d => d.phase === "outbound").map(d => <DayCard key={d.id} day={d} />)}

      <SecLabel color="#c25a4a">Tokyo · first stretch (9–12 Jul)</SecLabel>
      {DAYS.filter(d => d.phase === "tokyo-1").map(d => <DayCard key={d.id} day={d} />)}

      <SecLabel color="#2d6a52">Hokkaido · northern islands (12–17 Jul)</SecLabel>
      {DAYS.filter(d => d.phase === "islands").map(d => <DayCard key={d.id} day={d} />)}

      <SecLabel color="#3e7a8c">Hokkaido · mainland (17–24 Jul)</SecLabel>
      {DAYS.filter(d => d.phase === "mainland").map(d => <DayCard key={d.id} day={d} />)}

      <SecLabel color="#c25a4a">Tokyo · second stretch (24–28 Jul)</SecLabel>
      {DAYS.filter(d => d.phase === "tokyo-2").map(d => <DayCard key={d.id} day={d} />)}

      <SecLabel color="#7a8a73">Return · Tokyo to London</SecLabel>
      {DAYS.filter(d => d.phase === "return").map(d => <DayCard key={d.id} day={d} />)}
    </div>
  );
}

function TransportTab() {
  const isMobile = useIsMobile();
  const Row = ({ children, status, last }) => (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      padding: "13px 18px",
      borderBottom: last ? "none" : "1px solid #f0ede4",
      background: status === "urgent" ? "#fdf3f0" : "white",
    }}>{children}</div>
  );
  const MobileRow = ({ status, last, date, route, routeMap, detail, booking, badge }) => (
    <div style={{
      padding: "12px 14px",
      borderBottom: last ? "none" : "1px solid #f0ede4",
      background: status === "urgent" ? "#fdf3f0" : "white",
      display: "flex", flexDirection: "column", gap: 5,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6, flexWrap: "wrap" }}>
        <span style={{ fontSize: 11, color: "#a8a298", fontWeight: 600, letterSpacing: "0.04em", fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>{date}</span>
        {badge}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap" }}>
        <span style={{ fontSize: 16, color: "#1f1d18", fontFamily: "'Instrument Serif', Georgia, serif" }}>{route}</span>
        {routeMap}
      </div>
      {detail && <div style={{ fontSize: 12.5, color: "#6f6a5d", fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>{detail}</div>}
      {booking && <div style={{ marginTop: 2 }}>{booking}</div>}
    </div>
  );
  return (
    <div>
      <SecLabel color="#6f5fc4">Flights — all confirmed</SecLabel>
      <div style={{ background: "white", border: "1px solid #e2dfd6", borderRadius: 14, overflow: "hidden", marginBottom: 6 }}>
        {FLIGHTS.map((f, i) => {
          const last = i === FLIGHTS.length - 1;
          if (isMobile) {
            return (
              <MobileRow key={i} last={last} date={f.date} route={f.route}
                detail={f.detail}
                booking={f.url && <BookingLink url={f.url} label={f.urlLabel || "View booking"} />}
                badge={<Badge status="confirmed">Booked ✓</Badge>}
              />
            );
          }
          return (
            <Row key={i} last={last}>
              <span style={{ fontSize: 11.5, color: "#a8a298", minWidth: 54, flexShrink: 0, fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>{f.date}</span>
              <span style={{
                fontSize: 14.5, color: "#1f1d18", flex: 1.2,
                fontFamily: "'Instrument Serif', Georgia, serif",
              }}>{f.route}</span>
              <span style={{ fontSize: 12.5, color: "#6f6a5d", flex: 1.5, fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>{f.detail}</span>
              <div style={{ width: 140, flexShrink: 0, display: "flex", justifyContent: "center" }}>
                {f.url && <BookingLink url={f.url} label={f.urlLabel || "View booking"} />}
              </div>
              <div style={{ width: 96, flexShrink: 0, display: "flex", justifyContent: "flex-end" }}>
                <Badge status="confirmed">Booked ✓</Badge>
              </div>
            </Row>
          );
        })}
      </div>

      <SecLabel color="#3e7a8c">Ferries</SecLabel>
      <div style={{ background: "white", border: "1px solid #e2dfd6", borderRadius: 14, overflow: "hidden", marginBottom: 6 }}>
        {FERRIES.map((f, i) => {
          const arrow = f.route.split(" → ");
          const routeMap = arrow.length === 2 ? <MapLink from={arrow[0]} to={arrow[1]} mode="transit" label="Route" /> : null;
          const last = i === FERRIES.length - 1;
          const bookingLinks = (
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {f.url && <BookingLink url={f.url} label={f.urlLabel || "View booking"} />}
              {f.confUrl && <BookingLink url={f.confUrl} label="Confirmation" />}
            </div>
          );
          if (isMobile) {
            return (
              <MobileRow key={i} last={last} status={f.status} date={f.date} route={f.route}
                routeMap={routeMap} detail={f.detail} booking={bookingLinks}
                badge={<Badge status={f.status}>{f.note}</Badge>}
              />
            );
          }
          return (
          <Row key={i} last={last} status={f.status}>
            <span style={{ fontSize: 11.5, color: "#a8a298", minWidth: 54, flexShrink: 0, fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>{f.date}</span>
            <span style={{ fontSize: 14.5, color: "#1f1d18", flex: 1.2, fontFamily: "'Instrument Serif', Georgia, serif", display: "flex", alignItems: "baseline", gap: 6 }}>
              <span>{f.route}</span>{routeMap}
            </span>
            <span style={{ fontSize: 12.5, color: "#6f6a5d", flex: 1.5, fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>{f.detail}</span>
            <div style={{ width: 180, flexShrink: 0, display: "flex", gap: 6, justifyContent: "center" }}>
              {f.url && <BookingLink url={f.url} label={f.urlLabel || "View booking"} />}
              {f.confUrl && <BookingLink url={f.confUrl} label="Confirmation" />}
            </div>
            <div style={{ width: 96, flexShrink: 0, display: "flex", justifyContent: "flex-end" }}>
              <Badge status={f.status}>{f.note}</Badge>
            </div>
          </Row>
          );
        })}
      </div>

      <SecLabel color="#2d6a52">Trains & buses</SecLabel>
      <div style={{ background: "white", border: "1px solid #e2dfd6", borderRadius: 14, overflow: "hidden" }}>
        {GROUND.map((g, i) => {
          const arrow = g.route.split(" → ");
          const routeMap = arrow.length === 2 ? <MapLink from={arrow[0]} to={arrow[1]} mode="transit" label="Route" /> : null;
          const last = i === GROUND.length - 1;
          const statusForBadge = g.status === "gray" ? "confirmed" : g.status;
          if (isMobile) {
            return (
              <MobileRow key={i} last={last} status={g.status} date={g.date} route={g.route}
                routeMap={routeMap} detail={g.detail}
                badge={<Badge status={statusForBadge}>{g.note}</Badge>}
              />
            );
          }
          return (
          <Row key={i} last={last}>
            <span style={{ fontSize: 11.5, color: "#a8a298", minWidth: 54, flexShrink: 0, fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>{g.date}</span>
            <div style={{ flex: 1.2 }}>
              <div style={{ fontSize: 14.5, color: "#1f1d18", fontFamily: "'Instrument Serif', Georgia, serif", display: "flex", alignItems: "baseline", gap: 6 }}>
                <span>{g.route}</span>{routeMap}
              </div>
            </div>
            <span style={{ fontSize: 12.5, color: "#6f6a5d", flex: 1.5, fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>{g.detail}</span>
            <div style={{ width: 180, flexShrink: 0 }} />
            <div style={{ width: 96, flexShrink: 0, display: "flex", justifyContent: "flex-end" }}>
              <Badge status={statusForBadge}>{g.note}</Badge>
            </div>
          </Row>
          );
        })}
      </div>
      {/* Transport total */}
      {(() => {
        const known = [...FLIGHTS, ...FERRIES, ...GROUND].reduce((s, x) => s + (x.gbp || 0), 0);
        const tbcCount = [...FLIGHTS, ...FERRIES, ...GROUND].filter(x => x.gbp == null).length;
        return (
          <div style={{
            marginTop: 16, background: "white", border: "1px solid #e2dfd6", borderRadius: 14,
            padding: "16px 20px", display: "flex", alignItems: "baseline", justifyContent: "space-between",
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
          }}>
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#a8a298", marginBottom: 4 }}>Transport total (known)</div>
              <div style={{ fontSize: 11.5, color: "#8a8478" }}>{tbcCount} line{tbcCount !== 1 ? "s" : ""} still TBC (Peach return, train, buses)</div>
            </div>
            <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 32, color: "#1f1d18" }}>£{known.toFixed(2)}</div>
          </div>
        );
      })()}
    </div>
  );
}

function StaysTab() {
  const isMobile = useIsMobile();
  const totalNights = STAYS.reduce((s, x) => s + x.nights, 0);
  const confirmed = STAYS.filter(s => s.status === "confirmed").reduce((s, x) => s + x.nights, 0);
  const unconfirmed = totalNights - confirmed;

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
        <Stat label="Total nights" value={totalNights} sub="across 8 places" />
        <Stat label="Confirmed" value={confirmed} sub={`of ${totalNights} nights`} accent="#2d6a52" />
        <Stat label="Still unsorted" value={unconfirmed} sub="needs attention" accent="#c4502f" />
      </div>
      <SecLabel>All accommodation</SecLabel>
      <div style={{ background: "white", border: "1px solid #e2dfd6", borderRadius: 14, overflow: "hidden" }}>
        {STAYS.map((s, i) => {
          const c = STATUS_COLORS[s.status] || STATUS_COLORS.gray;
          if (isMobile) {
            return (
              <div key={i} style={{
                padding: "14px 16px",
                borderBottom: i < STAYS.length - 1 ? "1px solid #f0ede4" : "none",
                background: s.status === "urgent" ? "#fdf3f0" : s.status === "pending" ? "#fcf6e6" : "white",
                display: "flex", flexDirection: "column", gap: 6,
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                  <span style={{ fontSize: 11, color: "#a8a298", fontWeight: 600, letterSpacing: "0.04em", fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>{s.dates} · {s.nights}n</span>
                  <Badge status={s.status} size="md">
                    {s.status === "confirmed" ? "Confirmed" : s.status === "pending" ? "Confirm?" : "Not booked"}
                  </Badge>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 17, color: "#1f1d18", fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 500 }}>{s.name}</span>
                  <MapLink query={s.name} loc={s.loc} url={s.mapUrl} />
                </div>
                <div style={{ fontSize: 12, color: "#8a8478", fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>
                  {s.loc}{s.ref ? ` · ${s.ref}` : ""}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginTop: 2, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 13, color: "#3a3833", fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>{s.cost}</span>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {s.url && <BookingLink url={s.url} label="Confirmation" />}
                    {s.bookingUrl && <BookingLink url={s.bookingUrl} label="Booking page" />}
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "16px 20px",
              borderBottom: i < STAYS.length - 1 ? "1px solid #f0ede4" : "none",
              background: s.status === "urgent" ? "#fdf3f0" : s.status === "pending" ? "#fcf6e6" : "white",
            }}>
              <div style={{
                fontSize: 11.5, color: "#a8a298", minWidth: 76, flexShrink: 0,
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              }}>
                {s.dates}
                <div style={{ fontSize: 10, color: "#bcb6a8", marginTop: 2 }}>{s.nights}n</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: 16, color: "#1f1d18",
                  fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 500,
                  display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap",
                }}>
                  <span>{s.name}</span>
                  <MapLink query={s.name} loc={s.loc} url={s.mapUrl} />
                </div>
                <div style={{
                  fontSize: 12, color: "#8a8478", marginTop: 2,
                  fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                }}>
                  {s.loc}{s.ref ? ` · ${s.ref}` : ""}
                </div>
              </div>
              <span style={{
                fontSize: 12.5, color: "#3a3833", width: 170, flexShrink: 0, textAlign: "right",
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif", lineHeight: 1.4,
              }}>{s.cost}</span>
              <div style={{ width: 210, flexShrink: 0, display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap" }}>
                {s.url && <BookingLink url={s.url} label="Confirmation" />}
                {s.bookingUrl && <BookingLink url={s.bookingUrl} label="Booking page" />}
              </div>
              <div style={{ width: 110, flexShrink: 0, display: "flex", justifyContent: "flex-end" }}>
                <Badge status={s.status} size="md">
                  {s.status === "confirmed" ? "Confirmed" : s.status === "pending" ? "Confirm?" : "Not booked"}
                </Badge>
              </div>
            </div>
          );
        })}
      </div>
      {(() => {
        const known = STAYS.reduce((s, x) => s + (x.gbp || 0), 0);
        const tbcNights = STAYS.filter(x => x.gbp == null).reduce((s, x) => s + x.nights, 0);
        return (
          <div style={{
            marginTop: 16, background: "white", border: "1px solid #e2dfd6", borderRadius: 14,
            padding: "16px 20px", display: "flex", alignItems: "baseline", justifyContent: "space-between",
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
          }}>
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#a8a298", marginBottom: 4 }}>Accommodation total (known)</div>
              <div style={{ fontSize: 11.5, color: "#8a8478" }}>{tbcNights} nights still TBC (Tokyo)</div>
            </div>
            <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 32, color: "#1f1d18" }}>£{known.toFixed(2)}</div>
          </div>
        );
      })()}
    </div>
  );
}

function Stat({ label, value, sub, accent = "#1f1d18" }) {
  return (
    <div style={{
      background: "white", border: "1px solid #e2dfd6", borderRadius: 12,
      padding: "14px 16px",
    }}>
      <div style={{
        fontSize: 10.5, color: "#a8a298", fontWeight: 600,
        textTransform: "uppercase", letterSpacing: "0.14em",
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
      }}>{label}</div>
      <div style={{
        fontSize: 34, color: accent, fontWeight: 400, marginTop: 4, lineHeight: 1,
        fontFamily: "'Instrument Serif', Georgia, serif",
      }}>{value}</div>
      <div style={{
        fontSize: 12, color: "#8a8478", marginTop: 4,
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
      }}>{sub}</div>
    </div>
  );
}

function CostAccordion({ title, icon, known, tbcNote, children, color = "#2d6a52", defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ background: "white", border: "1px solid #e2dfd6", borderRadius: 14, overflow: "hidden", marginBottom: 10 }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: "100%", display: "flex", alignItems: "center", gap: 12,
        padding: "14px 18px", background: "none", border: "none", cursor: "pointer",
        textAlign: "left",
      }}>
        <span style={{
          width: 32, height: 32, borderRadius: 8, background: `${color}18`,
          color, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, flexShrink: 0,
        }}>{icon}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#1f1d18", fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>{title}</div>
          {tbcNote && <div style={{ fontSize: 11, color: "#a8a298", marginTop: 1, fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>{tbcNote}</div>}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 22, color: known > 0 ? "#1f1d18" : "#a8a298" }}>
            {known > 0 ? `£${known.toFixed(2)}` : "TBC"}
          </div>
          <span style={{ fontSize: 13, color: "#a8a298", width: 16, textAlign: "center" }}>{open ? "−" : "+"}</span>
        </div>
      </button>
      {open && (
        <div style={{ borderTop: "1px solid #f0ede4" }}>
          {children}
        </div>
      )}
    </div>
  );
}

function MoneyTab() {
  const isMobile = useIsMobile();
  const unpaidItems = GEORGE.filter(g => g.status !== "paid");
  const paidItems = GEORGE.filter(g => g.status === "paid");
  const totalOwed = unpaidItems.reduce((s, g) => s + g.gbp, 0);
  const totalYen = unpaidItems.reduce((s, g) => s + parseInt(g.yen.replace(/[^0-9]/g, ""), 10), 0);
  const paidGbp = paidItems.reduce((s, g) => s + g.gbp, 0);

  const accomKnown = STAYS.reduce((s, x) => s + (x.gbp || 0), 0);
  const accomTbcNights = STAYS.filter(x => x.gbp == null).reduce((s, x) => s + x.nights, 0);

  const allTransport = [...FLIGHTS, ...FERRIES, ...GROUND];
  const transportKnown = allTransport.reduce((s, x) => s + (x.gbp || 0), 0);
  const transportTbc = allTransport.filter(x => x.gbp == null).length;

  const grandKnown = accomKnown + transportKnown;

  const IBM = "'IBM Plex Sans', system-ui, sans-serif";
  const SERIF = "'Instrument Serif', Georgia, serif";

  return (
    <div>
      {/* You owe Leika header */}
      <div style={{
        background: "linear-gradient(135deg, #1c2e25 0%, #2a4538 100%)",
        borderRadius: 14, padding: isMobile ? "20px 18px" : "26px 28px", marginBottom: 10,
        color: "#f4f1e8", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", right: -30, top: -30, width: 180, height: 180,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(232,200,154,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 11, color: "rgba(244,241,232,0.65)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 8, fontFamily: IBM }}>You owe Leika</div>
            <div style={{ fontSize: isMobile ? 40 : 64, fontWeight: 400, lineHeight: 1, color: "#f4f1e8", fontFamily: SERIF }}>£{totalOwed.toFixed(2)}</div>
            <div style={{ fontSize: 15, color: "rgba(244,241,232,0.7)", marginTop: 6, fontFamily: IBM }}>≈ {totalYen.toLocaleString()}¥</div>
            <div style={{ fontSize: 12, color: "rgba(244,241,232,0.55)", marginTop: 6, fontFamily: IBM }}>{unpaidItems.length} unpaid · £{paidGbp.toFixed(2)} already settled</div>
          </div>
          <div style={{ padding: "5px 12px", background: "rgba(232,200,154,0.15)", color: "#e8c89a", border: "1px solid rgba(232,200,154,0.3)", borderRadius: 99, fontSize: 11, fontWeight: 600, fontFamily: IBM, alignSelf: "flex-start" }}>Outstanding</div>
        </div>
      </div>

      {/* GEORGE items */}
      <div style={{ background: "white", border: "1px solid #e2dfd6", borderRadius: 14, overflow: "hidden", marginBottom: 18 }}>
        {GEORGE.map((g, i) => {
          const isPaid = g.status === "paid";
          return (
            <div key={i} style={{
              padding: isMobile ? "11px 14px" : "14px 20px",
              borderBottom: i < GEORGE.length - 1 ? "1px solid #f0ede4" : "none",
              background: isPaid ? "#fafaf7" : "white",
              opacity: isPaid ? 0.65 : 1,
              display: "flex", alignItems: isMobile ? "flex-start" : "center",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? 3 : 14,
            }}>
              {isMobile ? (
                <>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: 8 }}>
                    <span style={{ fontSize: 11, color: "#a8a298", fontWeight: 600, letterSpacing: "0.04em", fontFamily: IBM }}>{g.date}</span>
                    <Badge status={isPaid ? "confirmed" : "urgent"}>{isPaid ? "Paid ✓" : "Unpaid"}</Badge>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", width: "100%", gap: 8 }}>
                    <span style={{ fontSize: 13.5, color: "#1f1d18", fontFamily: IBM, textDecoration: isPaid ? "line-through" : "none", textDecorationColor: "#a8a298" }}>{g.item}</span>
                    <span style={{ fontSize: 17, color: "#1f1d18", fontFamily: SERIF, fontWeight: 500, flexShrink: 0 }}>£{g.gbp.toFixed(2)}</span>
                  </div>
                </>
              ) : (
                <>
                  <span style={{ fontSize: 11.5, color: "#a8a298", minWidth: 70, flexShrink: 0, fontFamily: IBM }}>{g.date}</span>
                  <span style={{ fontSize: 14, color: "#1f1d18", flex: 1, fontFamily: IBM, textDecoration: isPaid ? "line-through" : "none", textDecorationColor: "#a8a298" }}>{g.item}</span>
                  <Badge status={isPaid ? "confirmed" : "urgent"}>{isPaid ? "Paid ✓" : "Unpaid"}</Badge>
                  <span style={{ fontSize: 12, color: "#8a8478", minWidth: 60, textAlign: "right", fontFamily: IBM }}>{g.yen}</span>
                  <span style={{ fontSize: 18, color: "#1f1d18", minWidth: 72, textAlign: "right", fontFamily: SERIF, fontWeight: 500 }}>£{g.gbp.toFixed(2)}</span>
                </>
              )}
            </div>
          );
        })}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "#f7f4eb", borderTop: "2px solid #e2dfd6", gap: 8, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#1f1d18", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: IBM }}>Still outstanding</span>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span style={{ fontSize: 12, color: "#8a8478", fontFamily: IBM }}>{totalYen.toLocaleString()}¥</span>
            <span style={{ fontSize: 22, color: "#c4502f", fontFamily: SERIF }}>£{totalOwed.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Cost summary accordions */}
      <SecLabel color="#5b574e">Trip cost breakdown</SecLabel>

      <CostAccordion title="Accommodation" icon="🏠" known={accomKnown} color="#2d6a52"
        tbcNote={accomTbcNights > 0 ? `${accomTbcNights} nights still TBC (Tokyo)` : "All nights accounted for"}>
        {STAYS.filter(s => s.gbp != null || s.cost !== "—").map((s, i, arr) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "10px 18px", gap: 12,
            borderBottom: i < arr.length - 1 ? "1px solid #f0ede4" : "none",
            flexWrap: "wrap",
          }}>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13, color: "#1f1d18", fontFamily: IBM, fontWeight: 500 }}>{s.name}</div>
              <div style={{ fontSize: 11, color: "#a8a298", fontFamily: IBM, marginTop: 1 }}>{s.dates} · {s.nights} night{s.nights !== 1 ? "s" : ""}</div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              {s.gbp != null
                ? <span style={{ fontSize: 15, color: "#1f1d18", fontFamily: SERIF }}>£{s.gbp.toFixed(2)}</span>
                : <span style={{ fontSize: 12, color: "#a8a298", fontFamily: IBM }}>TBC</span>
              }
            </div>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 18px", background: "#f7f4eb", borderTop: "1px solid #e2dfd6" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#5b574e", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: IBM }}>Known total</span>
          <span style={{ fontSize: 18, color: "#1f1d18", fontFamily: SERIF }}>£{accomKnown.toFixed(2)}</span>
        </div>
      </CostAccordion>

      <CostAccordion title="Transport" icon="✈️" known={transportKnown} color="#6f5fc4"
        tbcNote={transportTbc > 0 ? `${transportTbc} item${transportTbc !== 1 ? "s" : ""} still TBC` : "All transport accounted for"}>
        {[
          { label: "Flights", items: FLIGHTS },
          { label: "Ferries", items: FERRIES },
          { label: "Trains & buses", items: GROUND },
        ].map(({ label, items }) => (
          <React.Fragment key={label}>
            <div style={{ padding: "8px 18px 4px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#a8a298", fontFamily: IBM, background: "#fdfcf8" }}>{label}</div>
            {items.map((t, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "8px 18px", gap: 12,
                borderBottom: "1px solid #f0ede4", flexWrap: "wrap",
              }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13, color: "#1f1d18", fontFamily: IBM, fontWeight: 500 }}>{t.route}</div>
                  <div style={{ fontSize: 11, color: "#a8a298", fontFamily: IBM, marginTop: 1 }}>{t.date}</div>
                </div>
                <div style={{ flexShrink: 0 }}>
                  {t.gbp != null
                    ? <span style={{ fontSize: 15, color: "#1f1d18", fontFamily: SERIF }}>£{t.gbp.toFixed(2)}</span>
                    : <span style={{ fontSize: 12, color: "#a8a298", fontFamily: IBM }}>TBC</span>
                  }
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 18px", background: "#f7f4eb", borderTop: "1px solid #e2dfd6" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#5b574e", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: IBM }}>Known total</span>
          <span style={{ fontSize: 18, color: "#1f1d18", fontFamily: SERIF }}>£{transportKnown.toFixed(2)}</span>
        </div>
      </CostAccordion>

      <CostAccordion title="Activities" icon="🎌" known={0} color="#c25a4a"
        tbcNote="No activity costs logged yet">
        <div style={{ padding: "20px 18px", fontSize: 13, color: "#8a8478", fontFamily: IBM, textAlign: "center" }}>
          Add activity costs to data.js as you plan them.
        </div>
      </CostAccordion>

      {/* Grand total */}
      <div style={{ background: "white", border: "1px solid #e2dfd6", borderRadius: 14, padding: "16px 20px", display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 4, flexWrap: "wrap", gap: 8 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#a8a298", marginBottom: 3, fontFamily: IBM }}>Total trip cost (known)</div>
          <div style={{ fontSize: 12, color: "#8a8478", fontFamily: IBM }}>Excl. Tokyo accom, some transport & activities</div>
        </div>
        <div style={{ fontFamily: SERIF, fontSize: 34, color: "#1f1d18" }}>£{grandKnown.toFixed(2)}</div>
      </div>
    </div>
  );
}

// ---- Root ----
function App() {
  const daysToGo = useDaysToGo();
  const isMobile = useIsMobile();
  const [tab, setTab] = useState(() => {
    const saved = localStorage.getItem("jp-tab");
    if (saved === "overview" || saved === "daily") return "days";
    if (saved) return saved;
    // Default to Today tab once trip has started
    const now = new Date(); now.setHours(0,0,0,0);
    return now >= new Date(TRIP.start) ? "today" : "map";
  });

  useEffect(() => { localStorage.setItem("jp-tab", tab); }, [tab]);

  return (
    <div style={{
      fontFamily: "'IBM Plex Sans', system-ui, -apple-system, sans-serif",
      background: "#f4f1e8", minHeight: "100vh", color: "#1f1d18",
    }}>
      <Header daysToGo={daysToGo} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "0 14px 48px" : "0 24px 64px" }}>
        <ActionPanel />
        <Tabs tab={tab} setTab={setTab} />
        {tab === "today" && <TodayTab />}
        {tab === "map" && <TripMap key="map" />}
        {tab === "days" && (
          <div style={{
            height: "calc(100vh - 260px)", minHeight: 400,
            overflowY: "auto", borderRadius: 10,
            paddingRight: 4,
          }}>
            <DaysTab />
          </div>
        )}
        {tab === "transport" && <TransportTab />}
        {tab === "stays" && <StaysTab />}
        {tab === "money" && <MoneyTab />}
      </div>
      <div style={{
        textAlign: "center", padding: "24px 16px 40px",
        fontSize: 11.5, color: "#a8a298",
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        letterSpacing: "0.06em",
      }}>
        Made for the Japan trip · last updated {new Date(TRIP.today).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
})();
