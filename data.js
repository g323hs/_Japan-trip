// All trip data — kept in plain JS so it's easy for you to edit by hand.

const TRIP = {
  start: "2026-07-07",
  end: "2026-07-29",
  today: "2026-05-19",
};

const URGENT = [
  {
    type: "pending",
    title: "Book morning of 10 Jun: Fuji Excursion train (Shinjuku 07:30 → Kawaguchiko)",
    body: "10 Jul day trip. All seats reserved — book early, July is peak season. Use eki-net or Klook. ¥4,200 one way.",
    deadline: "10 Jun",
  },
  {
    type: "pending",
    title: "Book 7–8 Jul: Free Yurari shuttle (Kawaguchiko 13:00 → Yurari)",
    body: "10 Jul day trip. Must book ≥1hr before departure — book 2–3 days ahead to be safe. Link in 10 Jul day.",
    deadline: "7 Jul",
  },
  {
    type: "pending",
    title: "Book on 17 June: Wakkanai → Asahikawa train (13:01 → 16:45)",
    body: "Opens exactly 1 month before. Set a calendar reminder.",
    deadline: "17 Jun",
  },
];

const SOYA_BUS_REBUN_B = "uploads/transport/soya-bus-rebun-b-ticket.pdf";

const PH_TRAVEL_PDF = "uploads/transport/air-india-eticket-FF686P.pdf";
const PH_TRAVEL_PNR = "FF686P";       // Brightsun/PH Travel reservation code
const PH_TRAVEL_AI_PNR = "XS55VZ";    // Air India confirmation number
const PH_TRAVEL_TKT = "0986393639706";
const TRIPCOM_CTS_WKJ = "https://uk.trip.com/online/orderdetail/index?orderid=1653714554019095&from=email&template=TRIP_BOOKING_CONFIRMED&locale=en-GB&channel=email&subChannel=TRIP_BOOKING_CONFIRMED&messagecode=TRIP_BOOKING_CONFIRMED&oid=1653714554019095&orderId=1653714554019095&redirectFromOnline=1&accesstoken=";
const HEARTLAND_FERRY = "https://reserve.heartlandferry.jp/hlf/wrv/webmgr.php?ifc_manager=login.view&lang_kbn=2";
const MOSHIRIPA_PDF       = "uploads/accom/moshiripa-wakkanai-12-13jul.pdf";
const MOSHIRIPA_URL       = "https://secure.booking.com/confirmation.en-gb.html?aid=812878&label=metaskyscan-uk-desktop-hotel-4974409_bw-53_los-1_lang-en_curr-GBP_group-3_gst-1_cid-20260712_dow-Sunday_fc-false_tod-17_mktgrp-_clkid-7baa3c8b-d71b-444e-a08b-b710eea6c1c3&sid=2b15b1e88d7a3ed0ecb5e6b16f61cbbd&auth_key=qesWroP67MzKW5Rd&bp_travel_purpose=leisure&hostname=www.booking.com&is_bsd_shown=1&pfi=10776413112610&pre_pbb_price=6996&pre_price=6996&rt_num_blocks=8&send_sms_confirmation=1&source=book&srpvid=41857171cade02ee&ua_created=0&";
const REBUNSHIRI_PDF      = "uploads/accom/rebunshiri-rebun-14-17jul.pdf";
const BUDDY_HOUSE_PDF     = "uploads/accom/buddy-house-asahikawa-17-19jul.pdf";
const HOSTEL_TOMAR_PDF    = "uploads/accom/tomar-furano-19-20jul.pdf";
const HOSTEL_TOMAR_URL    = "https://secure.booking.com/confirmation.en-gb.html?aid=304142&label=gen173bo-10EgxjaGFuZ2VfZGF0ZXMoggI46AdIM1gDaFCIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGYAgSoAgG4AoC0stAGwAIB0gIkNmI1OGNhMzItMDE1MS00MmMxLWIwOTYtNjEwZjA3OWZlMTJi2AIB4AIB&auth_key=4kbojz0RkYW3Iwlh&source=change_dates";
const GRAND_HOSTEL_LDK_PDF = "uploads/accom/grand-hostel-ldk-sapporo-20-23jul.png";
const GRAND_HOSTEL_LDK_URL = "https://secure.booking.com/tpi_confirmation.en-gb.html?label=gen173nr-10CAEoggI46AdIM1gEaFCIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4ApfhsdAGwAIB0gIkM2UwZWZjNDAtMzdkYi00ZGFhLWJkY2MtMTg0OWNjMDc5YWY12AIB4AIB&sid=65b31a614012a9a856133d0082479adc&aid=304142&ws_auth_key=MYLaeZPBNiEsg1gS";
const YUYUKAN_PDF         = "uploads/accom/yuyukan-chitose-23-24jul.pdf";
const YUYUKAN_URL         = "https://secure.booking.com/confirmation.en-gb.html?label=gen173nr-10CAEoggI46AdIM1gEaFCIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4ApfhsdAGwAIB0gIkM2UwZWZjNDAtMzdkYi00ZGFhLWJkY2MtMTg0OWNjMDc5YWY12AIB4AIB&sid=65b31a614012a9a856133d0082479adc&aid=304142&auth_key=pOdhkljxz4xcZzYz&source=mytrips";

const PEACH_BOOKING_URL = "https://flights.booking.com/booking/order-details/524ccbdfa11eff43e7b770e9b734b5650aa073efedb656ca68dff1022615a87d5288f48e1fa3bea71cf58f2249dfcc66be08f4eb88d420a6ebc8c0e158e925279c07eb0d93cf359290af0e139ff0?";

const FERRY_WKJ_RISHIRI_CONF = "uploads/transport/ferry-wakkanai-rishiri-13jul.png";
const FERRY_RISHIRI_REBUN_CONF = "uploads/transport/ferry-rishiri-rebun-14jul.png";
const FERRY_REBUN_WKJ_CONF = "uploads/transport/ferry-rebun-wakkanai-17jul.png";

const IMANO_HOSTEL_PDF   = "uploads/accom/imano-hostel-shinjuku-9-12jul.pdf";
const TOKYO_W_INN_PDF    = "uploads/accom/tokyo-w-inn-asakusa-24-28jul.pdf";

const DAYS = [
  { id: 1, date: "7 Jul", short: "Tue", title: "Fly London → Delhi", loc: "Heathrow", status: "confirmed", phase: "outbound",
    summary: "✈️ LHR → Delhi · overnight flight",
    transport: [{ mode: "plane", text: "Air India 2016 · LHR 21:05 → DEL 11:35 (next day)", meta: "10h 0m · 6h 35m transit in Delhi" }],
    activities: [], food: [], notes: [],
    schedule: [
      { start: "19:00", end: "21:05", label: "Heathrow check-in", kind: "walk" },
      { start: "21:05", end: "23:59", label: "AI 2016 LHR → DEL", kind: "plane" },
    ],
    bookings: [
      { label: "AI 2016 · Seat 049A · LHR T2 → DEL T3 · 787-9", url: PH_TRAVEL_PDF },
      { label: "PNR FF686P · AI ref XS55VZ · eTkt 0986393639706", url: PH_TRAVEL_PDF },
    ] },
  { id: 2, date: "8 Jul", short: "Wed", title: "Fly Delhi → Tokyo", loc: "Delhi", status: "confirmed", phase: "outbound",
    summary: "⏳ Delhi layover · ✈️ Delhi → Tokyo · arrive at dawn",
    transport: [{ mode: "plane", text: "Air India 358 · DEL 18:10 → HND 5:55 (next day)", meta: "8h 15m" }],
    activities: [], food: [], notes: [],
    schedule: [
      { start: "00:00", end: "11:35", label: "AI 2016 (arrives DEL 11:35)", kind: "plane" },
      { start: "11:35", end: "18:10", label: "Delhi transit · 6h 35m", kind: "transit" },
      { start: "18:10", end: "23:59", label: "AI 358 DEL → HND", kind: "plane" },
    ],
    bookings: [
      { label: "AI 358 · Seat 044K · DEL T3 → HND T3 · 787-8", url: PH_TRAVEL_PDF },
      { label: "PNR FF686P · AI ref XS55VZ", url: PH_TRAVEL_PDF },
    ] },
  { id: 3, date: "9 Jul", short: "Thu", title: "Arrive Tokyo", loc: "Tokyo", status: "pending", phase: "tokyo-1",
    summary: "✈️ Arrive Haneda 5:55am · 🗃️ Store bags · 🏙️ First Tokyo day · 🏨 Check in from 16:00",
    transport: [{ mode: "plane", text: "Air India 358 arrives Haneda 5:55am", meta: "Early arrival — check in not until 16:00, store bags at Haneda first" }],
    activities: ["Itinerary TBD — first full day in Tokyo"],
    food: [],
    notes: ["Haneda has luggage storage at the terminal — drop bags and explore before check-in", "Check-in from 16:00–23:00"],
    schedule: [
      { start: "05:55", end: "07:30", label: "Arrive Haneda · bags in storage", kind: "walk" },
      { start: "07:30", end: "15:30", label: "Explore Tokyo (TBD)", kind: "activity" },
      { start: "16:00", end: "17:00", label: "Check in Imano Hostel", kind: "stay" },
    ],
    bookings: [
      { label: "Imano Tokyo Hostel · #6037.580.015 PIN 5158", url: IMANO_HOSTEL_PDF },
    ] },
  { id: 20, date: "10 Jul", short: "Fri", title: "Kawaguchiko & Yurari Onsen", loc: "Kawaguchiko", status: "pending", phase: "tokyo-1",
    summary: "🚂 Fuji Excursion → Kawaguchiko · ⛵ Lake cruise · 🥾 Kachi Kachi hike · ♨️ Yurari onsen",
    transport: [
      { mode: "train", text: "Fuji Excursion · Shinjuku 07:30 → Kawaguchiko ~09:25", meta: "¥4,200 · all seats reserved · book morning of 10 Jun on eki-net or Klook" },
      { mode: "bus",   text: "Free shuttle · Kawaguchiko 13:00 → Yurari ~13:20", meta: "Book 7–8 Jul at reserva.be · must book ≥1hr before departure" },
      { mode: "bus",   text: "Free shuttle · Yurari 17:30 → Kawaguchiko ~17:50", meta: "Register at Yurari reception on arrival" },
      { mode: "bus",   text: "Highway bus · Kawaguchiko ~18:00 → Shinjuku ~20:15", meta: "~¥2,200 · buy at Kawaguchiko bus terminal on the day — no booking needed" },
    ],
    activities: [
      { text: "Appare sightseeing boat cruise (Funatsuhama pier) — 20-min loop, Lake Kawaguchiko + Mt. Fuji views. Every 30 min 09:00–17:30. Walk-up, ¥1,000. Do this first while the morning air is clearest.", url: "https://www.fujigokokisen.jp/contents/en/", urlLabel: "Boat info" },
      "Kachi Kachi mountain hike — trailhead next to boat pier. ~20–30 min up. Panoramic views of lake and Mt. Fuji, then hike back down. Total ~1–1.5 hrs. Free. (⚠️ ropeway closed until 15 Jul — hike on foot only)",
      { text: "Fuji Choribo-no-Yu Yurari — entry ~¥1,700 (summer rate, includes rental bath + face towel). Outdoor rocky bath, cave bath, sauna, carbonated spring, steam bath, panorama bath with Fuji views, elevated view bath.", url: "https://www.fuji-yurari.jp/charge-plan.html", urlLabel: "Yurari prices" },
      "Optional walk-in massage at Yurari: 60-min body ¥6,200 · 60-min Thai ¥6,500 · 40-min body ¥4,300 — ask at reception on arrival",
    ],
    food: [
      "Lunch ~11:45 in Kawaguchiko — hōtō (thick flat noodles in miso broth, Yamanashi speciality). Budget ~¥1,200–1,500. Allow ~45 min.",
      "Yurari restaurant: hōtō pot ¥2,000 · salmon bowl ¥1,320 · Fuji mountain curry ¥1,200. Budget ~¥1,000–2,000.",
    ],
    notes: [
      "Sit on the RIGHT side of the train for Mt. Fuji views after Otsuki",
      "Drop bags in coin locker at Kawaguchiko Station (~¥500)",
      "Register for the 17:30 return shuttle at Yurari reception on arrival",
      "Weather alt: if Fuji is clouded over, skip hike · replace with Oishi Park (north shore, lavender in bloom, best viewpoint) or Itchiku Kubota Art Museum",
      "Total cost with massage ~¥18,800 (~£95) · without massage ~¥12,600 (~£64)",
    ],
    schedule: [
      { start: "07:00", end: "07:30", label: "Walk to Shinjuku station (platforms 9/10, JR Chuo)", kind: "walk" },
      { start: "07:30", end: "09:25", label: "Fuji Excursion → Kawaguchiko", kind: "train" },
      { start: "09:25", end: "09:35", label: "Coin locker + walk to pier", kind: "walk" },
      { start: "09:35", end: "10:10", label: "Appare sightseeing boat cruise", kind: "activity" },
      { start: "10:10", end: "11:40", label: "Kachi Kachi mountain hike", kind: "activity" },
      { start: "11:45", end: "12:50", label: "Hōtō lunch", kind: "food" },
      { start: "12:50", end: "13:00", label: "Walk to station for shuttle", kind: "walk" },
      { start: "13:00", end: "13:20", label: "Free shuttle → Yurari onsen", kind: "bus" },
      { start: "13:20", end: "17:30", label: "Yurari onsen + optional massage", kind: "activity" },
      { start: "17:30", end: "17:50", label: "Free shuttle → Kawaguchiko", kind: "bus" },
      { start: "18:00", end: "20:15", label: "Highway bus → Shinjuku", kind: "bus" },
    ],
    bookings: [
      { label: "Fuji Excursion tickets · book morning 10 Jun (eki-net)", url: "https://www.eki-net.com/en/jreast-train-reservation/Top/Index" },
      { label: "Fuji Excursion tickets · Klook (English-friendly)", url: "https://www.klook.com/japan-rail/fuji-excursion/" },
      { label: "Yurari free shuttle · book 7–8 Jul (reserva.be)", url: "https://reserva.be/fuji_yurari/reserve?mode=service_staff&search_evt_no=37eJwzNjE1srAEAARPAUA" },
      { label: "Yurari onsen prices & plans", url: "https://www.fuji-yurari.jp/charge-plan.html" },
      { label: "Kawaguchiko sightseeing boat (Fujigoko Kisen)", url: "https://www.fujigokokisen.jp/contents/en/" },
      { label: "Highway bus Kawaguchiko → Shinjuku", url: "https://highway-buses.jp/course/kawaguchiko.php" },
      { label: "Fujikyu Railway · Fuji Excursion info", url: "https://e.fujikyu-railway.jp/fujikaiyuu/" },
    ] },
  { id: 21, date: "11 Jul", short: "Sat", title: "Tokyo free day", loc: "Tokyo", status: "pending", phase: "tokyo-1",
    summary: "🏙️ Free day in Tokyo · itinerary TBD",
    transport: [],
    activities: ["Itinerary TBD — last full day in Tokyo before the Hokkaido leg"],
    food: [],
    notes: ["Check out of Imano Hostel next morning (12 Jul) by ~09:30 for Narita flight"],
    schedule: [],
    bookings: [
      { label: "Imano Tokyo Hostel · #6037.580.015 PIN 5158", url: IMANO_HOSTEL_PDF },
    ] },
  { id: 4, date: "12 Jul", short: "Sun", title: "Tokyo → Sapporo → Wakkanai", loc: "Wakkanai", status: "confirmed", phase: "islands",
    summary: "✈️ Tokyo → Wakkanai · 🌊 Breakwater Dome · 🚲 Bike rental · 🍣 Fukuko Market",
    transport: [
      { mode: "plane", text: "Peach Aviation NRT → CTS · 11:50 → 13:40", meta: "£98.98 / ~21,100¥ · Confirmed" },
      { mode: "plane", text: "CTS → Wakkanai airport · 15:30 → 16:25", meta: "Confirmed" },
      { mode: "bus", text: "Soya bus: airport → Moshiripa · ~39 min", meta: "Cash only · no pre-book needed" },
    ],
    activities: [
      "Port Breakwater Dome (5-min walk from guest house)",
      "Hoppou Kinenkan",
      "Evening cycle — guest house has 2 rental bikes",
    ],
    food: [
      "Dinner: Wakkanai Fukuko Market (18-min walk) — or Aizawa food market",
    ],
    notes: [
      "⚠️ Order tomorrow's breakfast at Moshiripa by 9pm — ask about packed takeaway for 6:30am start",
    ],
    schedule: [
      { start: "09:30", end: "11:50", label: "NRT check-in", kind: "walk" },
      { start: "11:50", end: "13:40", label: "Peach NRT → CTS", kind: "plane" },
      { start: "13:40", end: "15:30", label: "CTS layover", kind: "transit" },
      { start: "15:30", end: "16:25", label: "CTS → Wakkanai", kind: "plane" },
      { start: "16:30", end: "17:10", label: "Bus → Moshiripa", kind: "bus" },
      { start: "17:30", end: "19:30", label: "Breakwater + bike", kind: "activity" },
      { start: "19:30", end: "20:45", label: "Dinner: Fukuko Mkt", kind: "food" },
      { start: "21:00", end: "21:30", label: "Order breakfast", kind: "stay" },
    ],
    bookings: [
      { label: "Peach NRT → CTS", url: PEACH_BOOKING_URL },
      { label: "Trip.com · CTS → Wakkanai", url: TRIPCOM_CTS_WKJ },
      { label: "Guest House Moshiripa", url: MOSHIRIPA_PDF },
    ] },
  { id: 5, date: "13 Jul", short: "Mon", title: "Ferry to Rishiri + cycling", loc: "Rishiri Island", status: "confirmed", phase: "islands",
    summary: "⛴️ Ferry to Rishiri · 🚲 Island cycling · 🌋 Mt. Rishiri · 🍱 Ryokan dinner",
    transport: [
      { mode: "walk", text: "Leave Moshiripa 6:30am · 15-min walk to ferry terminal", meta: "Set alarm — early start" },
      { mode: "ferry", text: "Ferry Wakkanai → Rishiri · 07:15 → 08:55", meta: "BOOKED · ref 2607-07596 ✓ · 7,180¥ / £33.65 each" },
      { mode: "car", text: "Saito Ryokan pickup at ferry terminal → ryokan", meta: "Arranged · drop luggage at ryokan before heading out" },
      { mode: "bike", text: "Bikes from Saito Ryokan", meta: "Pick up after dropping bags" },
    ],
    activities: [
      { text: "Drop luggage at Saito Ryokan after pickup — then head out" },
      { text: "7-hour cycling course around Rishiri", url: "https://www.town.rishirifuji.hokkaido.jp/rishirifuji/1404.htm", urlLabel: "Route & info" },
      "Check in Saito Ryokan after 3pm",
    ],
    food: [
      "Breakfast: Moshiripa packed bento from 6:30am",
      "Dinner: included at Saito Ryokan",
    ],
    notes: [],
    schedule: [
      { start: "06:30", end: "06:45", label: "Walk to ferry", kind: "walk" },
      { start: "07:15", end: "08:55", label: "Ferry → Rishiri", kind: "ferry" },
      { start: "09:00", end: "16:00", label: "7hr cycling course", kind: "bike" },
      { start: "16:00", end: "18:00", label: "Check in Saito Ryokan", kind: "stay" },
      { start: "18:00", end: "20:00", label: "Dinner at ryokan", kind: "food" },
    ],
    bookings: [
      { label: "Heartland · Wakkanai → Rishiri", url: HEARTLAND_FERRY },
      { label: "Ferry confirmation (Leika's booking)", url: FERRY_WKJ_RISHIRI_CONF },
    ] },
  { id: 6, date: "14 Jul", short: "Tue", title: "Rishiri morning → Ferry to Rebun", loc: "Rebun Island", status: "confirmed", phase: "islands",
    summary: "⛴️ Ferry to Rebun · 🏛️ Folk Museum · ♨️ Onsen · 🏠 Check in Rebunshiri",
    transport: [
      { mode: "bike", text: "Morning: shorter cycling course on Rishiri", meta: "Bikes still from Saito Ryokan" },
      { mode: "ferry", text: "Ferry Oshidomari → Kafuka · 13:15 → 14:00", meta: "BOOKED · ref 2607-07999 ✓ · 1,800¥ / £8.41 per adult" },
    ],
    activities: [
      { text: "Morning: shorter Rishiri cycling course before the ferry", url: "https://www.town.rishirifuji.hokkaido.jp/rishirifuji/1404.htm", urlLabel: "Route & info" },
      "Rebun Island Folk Museum (opens 8:30am · 600¥ / ~£2.80)",
      "Check-in from 4pm",
      "Rebun Onsen Usuyuki-no-Yu in the evening (600¥ / ~£2.80)",
    ],
    food: [],
    notes: ["Port is 14-min walk from Saito Ryokan — leave time"],
    schedule: [
      { start: "08:00", end: "12:00", label: "Morning cycle", kind: "bike" },
      { start: "12:00", end: "13:00", label: "Lunch + walk", kind: "walk" },
      { start: "13:15", end: "14:00", label: "Ferry → Rebun", kind: "ferry" },
      { start: "14:00", end: "15:30", label: "Folk Museum", kind: "activity" },
      { start: "16:00", end: "18:00", label: "Check in", kind: "stay" },
      { start: "18:00", end: "19:30", label: "Dinner", kind: "food" },
      { start: "19:30", end: "21:00", label: "Onsen", kind: "activity" },
    ],
    bookings: [
      { label: "Heartland · Rishiri → Rebun", url: HEARTLAND_FERRY },
      { label: "Ferry confirmation (George's booking)", url: FERRY_RISHIRI_REBUN_CONF },
      { label: "Shimanoyado Rebunshiri · #6117.328.292 PIN 0351", url: REBUNSHIRI_PDF },
    ] },
  { id: 7, date: "15 Jul", short: "Wed", title: "Rebun cycling day", loc: "Rebun Island", status: "confirmed", phase: "islands",
    summary: "🌄 Momoiwa sunrise · 🚲 Full cycling day · ☕ Kitano Canary Park",
    transport: [
      { mode: "bike", text: "Rent from Cat Rock", meta: "3,000¥ / ~£14 · 24hr" },
    ],
    activities: [
      { text: "Course 13 first — sunrise at Momoiwa Observatory", url: "uploads/activity/rebun-cycling-routes.png", urlLabel: "Route map" },
      { text: "Course 15 — Kitano Canary Park (café attached)", url: "uploads/activity/rebun-cycling-routes.png", urlLabel: "Route map" },
      { text: "Course 14 last", url: "uploads/activity/rebun-cycling-routes.png", urlLabel: "Route map" },
    ],
    food: ["Coffee at Kitano Canary Park café (mid-Course 15)"],
    notes: [],
    schedule: [
      { start: "04:30", end: "07:00", label: "Course 13 → Sunrise · Momoiwa", kind: "activity" },
      { start: "07:00", end: "09:00", label: "Breakfast + rest", kind: "food" },
      { start: "09:00", end: "12:00", label: "Course 15 → Kitano", kind: "bike" },
      { start: "12:00", end: "13:00", label: "Café break", kind: "food" },
      { start: "13:00", end: "17:00", label: "Course 14", kind: "bike" },
      { start: "18:30", end: "20:00", label: "Dinner", kind: "food" },
    ],
    bookings: [
      { label: "Shimanoyado Rebunshiri · #6117.328.292 PIN 0351", url: REBUNSHIRI_PDF },
    ] },
  { id: 8, date: "16 Jul", short: "Thu", title: "Forest hike + north island bus", loc: "Rebun Island", status: "confirmed", phase: "islands",
    summary: "🥾 Forest Road hike · 🚌 Soya B-course bus · 🌄 Momoiwa evening",
    transport: [
      { mode: "bus", text: "Soya bus Rebun B course · 14:15 → 16:40", meta: "Booked ✓" },
    ],
    activities: [
      "Rebun Forest Road course (8km, ~5hrs · ~1hr from hotel)",
      "Evening hike to Momoiwa Observatory (~55min from hotel)",
    ],
    food: ["Café Ruwe (5-min from hotel) — break after the forest hike"],
    notes: [],
    bookings: [
      { label: "Soya Bus B-course ticket", url: SOYA_BUS_REBUN_B },
      { label: "Shimanoyado Rebunshiri · #6117.328.292 PIN 0351", url: REBUNSHIRI_PDF },
    ],
    schedule: [
      { start: "08:00", end: "09:00", label: "To trailhead", kind: "walk" },
      { start: "09:00", end: "14:00", label: "Forest Road hike", kind: "activity" },
      { start: "14:15", end: "16:40", label: "Soya B-course bus", kind: "bus" },
      { start: "17:00", end: "18:30", label: "Café Ruwe", kind: "food" },
      { start: "19:00", end: "20:30", label: "Momoiwa hike", kind: "activity" },
    ] },
  { id: 9, date: "17 Jul", short: "Fri", title: "Rebun → Wakkanai → Asahikawa", loc: "Asahikawa", status: "pending", phase: "mainland",
    summary: "⛴️ Ferry → Wakkanai · 🚂 Train to Asahikawa · 🏙️ Evening explore",
    transport: [
      { mode: "ferry", text: "Check out · Ferry Rebun → Wakkanai · 08:55 → 10:50", meta: "BOOKED · ref 2607-09701 ✓ · 3,950¥ / £18.46 per adult" },
      { mode: "walk", text: "10-min walk: ferry terminal → Wakkanai station", meta: "Grab a bento for the train" },
      { mode: "train", text: "Train Wakkanai → Asahikawa · 13:01 → 16:45", meta: "Book exactly on 17 Jun" },
    ],
    activities: ["Explore Asahikawa · dinner + tomorrow's breakfast"],
    food: ["Bento lunch at Wakkanai station"],
    notes: ["Buddy House check-in 16:00 – 23:00 · non-refundable"],
    schedule: [
      { start: "08:30", end: "08:55", label: "Check out + port", kind: "walk" },
      { start: "08:55", end: "10:50", label: "Ferry → Wakkanai", kind: "ferry" },
      { start: "11:00", end: "13:01", label: "Walk + bento", kind: "food" },
      { start: "13:01", end: "16:45", label: "Train → Asahikawa", kind: "train" },
      { start: "17:00", end: "19:00", label: "Explore + check in", kind: "activity" },
      { start: "19:00", end: "20:30", label: "Dinner", kind: "food" },
    ],
    bookings: [
      { label: "Heartland · Rebun → Wakkanai", url: HEARTLAND_FERRY },
      { label: "Ferry confirmation (George's booking)", url: FERRY_REBUN_WKJ_CONF },
      { label: "Buddy House · #5278.868.395 PIN 9824", url: BUDDY_HOUSE_PDF },
    ] },
  { id: 10, date: "18 Jul", short: "Sat", title: "Asahidake hike + cable car", loc: "Asahikawa / Asahidake", status: "confirmed", phase: "mainland",
    summary: "🚡 Asahidake cable car · 🥾 Summit hike · ☕ Higashikawa cafés",
    transport: [
      { mode: "walk", text: "Leave 6:20am — 26 min to bus stop", meta: "Don't oversleep" },
      { mode: "bus", text: "Bus 66番 · JR Asahikawa sta. stop 9 · 7:15am", meta: "1,800¥ / ~£8.45 · vending-machine ticket" },
      { mode: "cable", text: "Arrive Asahidake Onsen 8:49am · hike with cable car", meta: "Max 5 hours" },
      { mode: "bus", text: "Return: 14:57 → Higashikawa 15:32 → last bus 17:32 → Asahikawa 18:33", meta: "Don't miss the last bus" },
    ],
    activities: [
      "Asahidake hike (5hr max) with cable car ride",
      "Explore Higashikawa cafés 15:32 – 17:32",
    ],
    food: [
      "Higashikawa cafés in the afternoon",
      "Aeon Mall by station — dinner + tomorrow's breakfast",
    ],
    notes: [],
    schedule: [
      { start: "06:20", end: "07:15", label: "Walk to bus stop", kind: "walk" },
      { start: "07:15", end: "08:49", label: "Bus 66 → Asahidake", kind: "bus" },
      { start: "08:49", end: "13:49", label: "Hike + cable car", kind: "activity" },
      { start: "14:57", end: "15:32", label: "Bus → Higashikawa", kind: "bus" },
      { start: "15:32", end: "17:32", label: "Higashikawa cafés", kind: "food" },
      { start: "17:32", end: "18:33", label: "Last bus back", kind: "bus" },
      { start: "19:00", end: "20:30", label: "Aeon Mall dinner", kind: "food" },
    ],
    bookings: [
      { label: "Buddy House · #5278.868.395 PIN 9824", url: BUDDY_HOUSE_PDF },
      { label: "Bus timetable (Asahidake line)", url: "https://www.asahikawa-denkikidou.jp/asahidaek_line/" },
      { label: "Asahidake hike guide", url: "https://hokkaidowilds.org/hiking/asahidake-ropeway-to-asahidake-summit" },
    ] },
  { id: 11, date: "19 Jul", short: "Sun", title: "Asahikawa → Furano · lavender", loc: "Furano", status: "confirmed", phase: "mainland",
    summary: "🚌 Asahikawa → Furano · 🌸 Lavender farms · ✨ Ningle Terrace",
    transport: [
      { mode: "bus", text: "Lavender Train bus · 9:55am · arrive Furano 11:38am", meta: "Buy on bus, no reservation" },
      { mode: "train", text: "~36-min train → Farm Tomita", meta: "From Furano station" },
    ],
    activities: [
      "Farm Tomita → Sakiwai Field → Irodori Field",
      "Ningle Terrace if time (closes 8:45pm)",
    ],
    food: [],
    notes: [
      "Hostel Tomar check-in from 3pm — drop luggage on arrival",
    ],
    schedule: [
      { start: "09:55", end: "11:38", label: "Bus → Furano", kind: "bus" },
      { start: "11:38", end: "12:30", label: "Drop bags · lunch", kind: "food" },
      { start: "12:30", end: "13:10", label: "Train → Tomita", kind: "train" },
      { start: "13:10", end: "17:30", label: "Lavender farms", kind: "activity" },
      { start: "18:00", end: "19:30", label: "Dinner", kind: "food" },
      { start: "19:30", end: "20:45", label: "Ningle Terrace", kind: "activity" },
    ],
    bookings: [
      { label: "Hostel Tomar", url: HOSTEL_TOMAR_PDF },
      { label: "Furano bus routes", url: "https://www.furanobus.jp/rosen/" },
    ] },
  { id: 12, date: "20 Jul", short: "Mon", title: "Blue Pond → Sapporo", loc: "Sapporo", status: "confirmed", phase: "mainland",
    summary: "💙 Blue Pond · 💧 Shirogane Falls · 🚌 Highway bus to Sapporo",
    transport: [
      { mode: "walk", text: "Check out 7:00am · store luggage at hostel", meta: "", mapQuery: "064-0805 Hokkaido Sapporo Chuo-ku Minami 5 jo Nishi 9 chome 1008-10" },
      { mode: "bus", text: "~1h 40min to Shirogane Blue Pond · +25-min walk to the Falls", meta: "Back by ~1:20pm" },
      { mode: "bus", text: "Highway express bus · 15:40 → Sapporo 18:24", meta: "2,700¥ · Buy on the day at Furano station" },
      { mode: "train", text: "22-min train → Grand Hostel LDK", meta: "" },
    ],
    routeGuide: {
      title: "Highway Furano 高速ふらの号",
      rows: [
        { label: "Bus",    value: "Line 28 · Highway Furano (高速ふらの号)" },
        { label: "Depart", value: "Furano-ekimae (Furano Sta.) · 15:40" },
        { label: "Arrive", value: "Sapporo Station bus stop · 18:15" },
        { label: "Ticket", value: "2,700¥ · buy at station on the day" },
        { label: "Walk",   value: "9 min from bus stop → Exit 9 · arrive 18:24" },
      ],
    },
    activities: [
      "Shirogane Blue Pond",
      "Shirogane Taki Falls (25-min walk from pond)",
      "Highway bus: Line 28 · Highway Furano (高速ふらの号)",
      "Depart Furano-ekimae (Furano Sta.) 15:40 · arrive Sapporo Station bus stop 18:15",
      "Ticket 2,700¥ · buy at station on the day",
      "9-min walk from bus stop → Exit 9 · arrive Grand Hostel LDK ~18:24",
    ],
    food: [],
    notes: [],
    schedule: [
      { start: "07:00", end: "07:30", label: "Check out", kind: "stay" },
      { start: "07:30", end: "09:10", label: "Bus → Blue Pond", kind: "bus" },
      { start: "09:10", end: "12:30", label: "Blue Pond + Falls", kind: "activity" },
      { start: "12:30", end: "14:10", label: "Bus → Furano", kind: "bus" },
      { start: "14:10", end: "15:40", label: "Lunch + pickup bags", kind: "food" },
      { start: "15:40", end: "18:24", label: "Highway bus → Sapporo", kind: "bus" },
      { start: "18:24", end: "19:30", label: "Train + check in", kind: "stay" },
    ],
    bookings: [
      { label: "Grand Hostel LDK Sapporo", url: GRAND_HOSTEL_LDK_PDF },
      { label: "Directions: Tomar → Blue Pond", url: "https://www.google.com/maps/dir/Tomar+%26+Eversa+(Hostel+and+Cafe+Lounge),+%E3%82%B3%E3%83%B3%E3%82%B7%E3%82%A7%E3%83%AB%E3%82%B8%E3%83%A5+%E3%83%95%E3%83%A9%E3%83%8E%E5%86%85+2-27+Motomachi,+Furano,+Hokkaido+076-0031,+Japan/Shirogane+Blue+Pond+(Aoiike),+Shirogane,+Biei,+Kamikawa+District,+Hokkaido+071-0235,+Japan/@43.4948001,142.3340925,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x5f734d29ea305185:0xd172fb3995cdbe!2m2!1d142.388071!2d43.3471364!1m5!1m1!1s0x5f0ccc62de222a6f:0x4cd181f9f4b779e!2m2!1d142.6142144!2d43.4934738!3e3?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D" },
    ] },
  { id: 13, date: "21 Jul", short: "Tue", title: "Sapporo day 1 · Nature & City Streets", loc: "Sapporo", status: "confirmed", phase: "mainland",
    summary: "🏔️ Mt. Maruyama · ⛩️ Hokkaido Shrine · 🏮 Tanuki Koji · 🦞 Susukino",
    transport: [],
    activities: [
      "Mt. Maruyama — 225m hike through ancient forest, 88 Kannon statues, panoramic summit views",
      "Maruyama Area / Urasando Street — local cafés, bakeries, picnic in Maruyama Park",
      "Hokkaido Shrine — one of Hokkaido's top power spots, try Fukure-mochi at Jingu Chaya",
      "Tanuki Koji Shopping Street — 900m covered arcade with 150 years of history",
      "Susukino evening — Hokkaido seafood, Genghis Khan BBQ, shime-parfait, giant Nikka Whisky sign",
    ],
    food: ["Susukino: izakaya, Sapporo ramen, shime-parfait after dinner"],
    notes: ["⚠️ Bear sightings possible on Mt. Maruyama — check locally before heading up"],
    schedule: [
      { start: "08:00", end: "09:30", label: "Mt. Maruyama hike", kind: "activity" },
      { start: "09:30", end: "11:00", label: "Maruyama Area / Urasando", kind: "activity" },
      { start: "11:00", end: "12:00", label: "Lunch in Maruyama Park", kind: "food" },
      { start: "12:00", end: "13:30", label: "Hokkaido Shrine", kind: "activity" },
      { start: "14:00", end: "16:00", label: "Tanuki Koji", kind: "activity" },
      { start: "18:00", end: "23:00", label: "Susukino · dinner", kind: "food" },
    ],
    guide: {
      title: "Sapporo Walking Tour — Nature & City Streets",
      stops: [
        { num: 1, name: "Mt. Maruyama", duration: "~1 hour", desc: "225m hike, ~30 mins from Sapporo Station by subway. The Maruyama-Hachijuhakkasho Trail is lined with 88 Kannon statues through ancient forest including century-old katsura trees. Summit gives a panoramic view over Sapporo. Best June–July. Bear sightings possible — check locally before going." },
        { num: 2, name: "Maruyama Area / Urasando Street", duration: "~1 hour", desc: "Start at Maruyama Class mall, walk east along Urasando (Minami 1-jo-dori), then north to the Maruyama Shopping District. Local cafés, bakeries, and restaurants — grab takeout and eat in Maruyama Park." },
        { num: 3, name: "Hokkaido Shrine", duration: "~40 mins", desc: "15-min walk from Maruyama Shopping District, entered via a torii gate in Maruyama Park. One of Hokkaido's top \"power spots.\" Try the exclusive mochi sweets — Fukure-mochi at Jingu Chaya or Hangan-sama at Rokkatei Jingu Chaya. Beautiful in every season." },
        { num: 4, name: "Tanuki Koji Shopping Street", duration: "~1 hour", desc: "Take subway from Maruyama Koen to Odori Station. A 900m covered arcade with 150 years of history — old restaurants, hip cafés, souvenir shops, and an aquarium. In wet weather reachable underground via Pole Town. Named after the tanuki (raccoon dog) — rub the guardian statue for good luck." },
        { num: 5, name: "Susukino", duration: "~2 hours", desc: "5-min walk from Tanuki Koji. One of Japan's top three entertainment districts. Dense neon lights, Hokkaido seafood (sushi, izakaya), Genghis Khan BBQ, Sapporo ramen, and the famous post-drinking shime-parfait. Look for the giant Nikka Whisky sign." },
      ],
    },
    bookings: [
      { label: "Grand Hostel LDK Sapporo", url: GRAND_HOSTEL_LDK_PDF },
    ] },
  { id: 14, date: "22 Jul", short: "Wed", title: "Sapporo day 2 · Seasonal Highlights", loc: "Sapporo", status: "confirmed", phase: "mainland",
    summary: "🗿 Hill of the Buddha · 🎨 Art Park · 🎓 Hokkaido University · 🌃 Mt. Moiwa",
    transport: [
      { mode: "bus", text: "9:15am bus · Makomanai sta. line 2 · 35 min", meta: "→ Hill of the Buddha" },
    ],
    activities: [
      "Hill of the Buddha — Tadao Ando design, walk through water garden & tunnel to the giant Buddha",
      "Sapporo Art Park — 40-hectare outdoor sculpture garden, 74 works by 64 artists; picnic-friendly",
      "Hokkaido University — 177-hectare campus, elm avenue, Seicomart for Hokkaido-exclusive snacks",
      "Mt. Moiwa — ropeway to 531m summit, one of Japan's top three night views; time for sunset",
      "Tanuki Koji — evening dinner: ramen, soup curry, Hokkaido seafood, TANUKI COMICHI laneway",
    ],
    food: ["Seicomart on Hokkaido University campus", "Tanuki Koji: ramen, soup curry, seafood"],
    notes: ["Hill of the Buddha: peak lavender season mid–late July · limited bus — check schedule ahead"],
    schedule: [
      { start: "09:15", end: "09:50", label: "Bus → Makomanai", kind: "bus" },
      { start: "10:00", end: "11:30", label: "Hill of the Buddha", kind: "activity" },
      { start: "12:00", end: "14:30", label: "Sapporo Art Park", kind: "activity" },
      { start: "15:30", end: "16:30", label: "Hokkaido Univ.", kind: "activity" },
      { start: "17:00", end: "19:00", label: "Mt. Moiwa · sunset", kind: "activity" },
      { start: "19:30", end: "22:00", label: "Tanuki Koji · dinner", kind: "food" },
    ],
    guide: {
      title: "Sapporo Sightseeing Tour — Seasonal Highlights",
      stops: [
        { num: 1, name: "Hill of the Buddha", duration: "~1 hour", desc: "~1.5 hrs from central Sapporo by subway to Makomanai then a 23-min bus. Designed by architect Tadao Ando — a giant Great Buddha whose head alone peeks out of a domed hill. You reach it by walking through a water garden and tunnel that act as a spiritual boundary. Also features Moai statues and a Stonehenge replica nearby. Peak lavender season is mid–late July. Limited bus schedule — check times in advance." },
        { num: 2, name: "Sapporo Art Park", duration: "~2 hours", desc: "~10 mins from Hill of the Buddha by bus (board at Takino Toge stop, not the arrival stop). A 40-hectare outdoor sculpture garden with 74 works by 64 artists, designed in harmony with the landscape. Also has an indoor museum and craft workshops — some hands-on activities need no reservation. Picnic-friendly; bring your own food." },
        { num: 3, name: "Hokkaido University", duration: "~1 hour", desc: "~50 mins from Art Park by bus and subway. Founded 1876, one of Japan's largest national universities at 177 hectares. Elm and poplar-lined streets, a spectacular ginkgo corridor (yellow in autumn), farms, and historic buildings. Stop at Seicomart on campus for Hokkaido-exclusive snacks and hot food." },
        { num: 4, name: "Mt. Moiwa", duration: "~1 hour", desc: "~1 hour from Hokkaido University by subway and streetcar. Take the ropeway then a mini cable car to the 531m summit. One of Japan's \"New Three Most Spectacular Night Views\" — best timed for sunset into dusk to catch both golden hour and the city lights of 1.9 million people spreading below. 360° panoramic observation deck." },
        { num: 5, name: "Tanuki Koji Shopping Street", duration: "~1 hour", desc: "Directly accessible by streetcar from Mt. Moiwa. Same 900m, ~200-shop arcade as itinerary 01 but highlighted here for evening dining — ramen, Hokkaido seafood, soup curry. Hidden gems: TANUKI COMICHI laneway food spot in 2-chome and Tanuki Koji Market in 6-chome for restaurant hopping." },
      ],
    },
    bookings: [
      { label: "Grand Hostel LDK Sapporo", url: GRAND_HOSTEL_LDK_PDF },
    ] },
  { id: 15, date: "23 Jul", short: "Thu", title: "Sapporo day 3 → Chitose", loc: "Sapporo / Chitose", status: "confirmed", phase: "mainland",
    summary: "🕰️ Clock Tower · 🦀 Nijo Market · 🍺 Beer Garden BBQ · 🚂 → Chitose",
    transport: [
      { mode: "train", text: "JR rapid Sapporo → Chitose · ~35 min", meta: "Evening" },
    ],
    activities: [
      "Sapporo Clock Tower — Japan's oldest clock tower, 140+ years old; visit on the hour for the chime",
      "Nijo Market — Hokkaido seafood market; fresh crab, scallops, oysters; get a seafood domburi",
      "Sapporo TV Tower + Odori Park — 90m observation deck; grilled corn wagon in the park",
      "Ganso Sapporo Ramen Alley — 17 restaurants in a narrow alley, 70+ years of miso ramen history",
      "Tanuki Koji Shopping Street — knife specialist, 700 capsule toy machines, touch the tanuki Jizo",
      "Sapporo Beer Garden & Museum — Premium Tour with tasting (book ahead), Genghis Khan BBQ dinner",
    ],
    food: ["Nijo Market: seafood domburi in the morning", "Ramen Alley: miso ramen lunch", "Beer Garden: Genghis Khan lamb BBQ dinner"],
    notes: [
      "Check out Grand Hostel LDK · store luggage · head to Chitose · 遊悠館 (£36 ✓)",
      "Beer Museum Premium Tour: advance booking required · 4× daily · ~50 mins with tasting",
    ],
    schedule: [
      { start: "09:00", end: "09:30", label: "Sapporo Clock Tower", kind: "activity" },
      { start: "09:30", end: "10:30", label: "Nijo Market", kind: "food" },
      { start: "10:30", end: "11:30", label: "TV Tower + Odori Park", kind: "activity" },
      { start: "11:30", end: "12:30", label: "Ramen Alley · lunch", kind: "food" },
      { start: "12:30", end: "14:00", label: "Tanuki Koji", kind: "activity" },
      { start: "14:30", end: "18:00", label: "Beer Garden & Museum", kind: "activity" },
      { start: "18:00", end: "19:00", label: "Pickup bags + train", kind: "train" },
      { start: "19:00", end: "20:30", label: "Check in Chitose", kind: "stay" },
    ],
    guide: {
      title: "Sapporo First-Timer's Tour — Iconic Sights",
      stops: [
        { num: 1, name: "Sapporo Clock Tower", duration: "~30 mins", desc: "5-min walk from Odori Station, 10-min from Sapporo Station. Japan's oldest remaining clock tower — a wooden building over 140 years old standing among skyscrapers. Tour inside to see history exhibits on Sapporo and Hokkaido. Visit on the hour to hear it chime. Statue of designer William Smith Clark on the upper floor." },
        { num: 2, name: "Nijo Market", duration: "~40 mins", desc: "~12-min walk east from the Clock Tower following the Sosei River south. Hokkaido's famous seafood market — fresh crab, live scallops, oysters, seasonal fish. Best visited in the morning for the widest selection. Restaurants inside serve seafood domburi (rice bowls) — the recommended way to sample the variety." },
        { num: 3, name: "Sapporo TV Tower + Odori Park", duration: "~40 mins", desc: "A 144m red tower at the east end of Odori Park with a 90m observation deck. The park stretches 1.5km through the city centre with ~4,700 trees. Two must-try snacks: soy sauce grilled corn from the park wagon (late Apr–early Oct) and chikuwa-pan from Donguri bakery at the 1-chome intersection." },
        { num: 4, name: "Ganso Sapporo Ramen Alley", duration: "~40 mins", desc: "~12-min walk from Odori Park. A narrow alley with over 70 years of history lined with 17 ramen restaurants, each with their own take on Sapporo's signature miso ramen. Hours vary per restaurant — check ahead for specific ones. A classic Sapporo lunch stop." },
        { num: 5, name: "Tanuki Koji Shopping Street", duration: "~1 hour", desc: "10-min walk from Ramen Alley. Same 900m, ~200-shop covered arcade. Unique stops here: a hand-sharpened knife specialist and a store with over 700 capsule toy machines. Touch the tanuki Jizo statue in 2-chome for one of eight blessings." },
        { num: 6, name: "Sapporo Beer Garden & Museum", duration: "~3–4 hours", desc: "~20 mins from Tanuki Koji by loop bus (boards at Odori Nishi 3-chome, every 30 mins). Japan's oldest beer museum. The Premium Tour (4× daily, advance booking required, ~50 mins) includes a tasting session with the exclusive Fukkoku Sapporo-sei reproduction beer. Non-drinkers: try Ribbon NAPOLIN, a Hokkaido-only fizzy drink. Finish with a Genghis Khan lamb BBQ dinner at the adjacent Beer Garden." },
      ],
    },
    bookings: [
      { label: "遊悠館 Chitose", url: YUYUKAN_PDF },
    ] },
  { id: 16, date: "24 Jul", short: "Fri", title: "Fly Sapporo → Tokyo", loc: "Tokyo / Asakusa", status: "confirmed", phase: "tokyo-2",
    summary: "✈️ Sapporo → Tokyo · 🏯 Asakusa base · 4 more days",
    transport: [
      { mode: "walk", text: "Arrive New Chitose by 11:30am", meta: "" },
      { mode: "plane", text: "Peach Aviation CTS → NRT · 11:50 → 13:35", meta: "Confirmed" },
    ],
    activities: ["Check in TOKYO-W-INN Asakusa from 16:00", "Explore Asakusa area — Senso-ji temple nearby"],
    food: [],
    notes: ["Non-refundable · check-in 16:00–23:00"],
    schedule: [
      { start: "09:00", end: "11:30", label: "To New Chitose", kind: "walk" },
      { start: "11:50", end: "13:35", label: "Peach CTS → NRT", kind: "plane" },
      { start: "13:35", end: "15:30", label: "NRT → Tokyo centre", kind: "train" },
      { start: "15:30", end: "16:00", label: "To Asakusa", kind: "train" },
      { start: "16:00", end: "18:00", label: "Check in + rest", kind: "stay" },
      { start: "18:00", end: "22:00", label: "Asakusa evening", kind: "activity" },
    ],
    bookings: [
      { label: "Peach CTS → NRT", url: PEACH_BOOKING_URL },
      { label: "TOKYO-W-INN Asakusa · #5660.154.938 PIN 6710", url: TOKYO_W_INN_PDF },
    ] },
  { id: 19, date: "25 Jul", short: "Sat", title: "Sumidagawa Fireworks Festival", loc: "Tokyo / Asakusa", status: "confirmed", phase: "tokyo-2",
    summary: "🎆 Sumidagawa Fireworks · 🏯 Asakusa · 🎌 Yukata evening",
    transport: [],
    activities: [
      { text: "Sumidagawa Fireworks Festival — Tokyo's largest display, ~1 million spectators, free · since 1733", url: "https://www.japan.travel/en/spot/385/", urlLabel: "Festival info" },
      "Head to Sumida riverbank early for a good spot — gets extremely crowded",
      "Consider renting a yukata — hire shops near Asakusa station",
      "Great views of fireworks reflected off Tokyo Skytree",
    ],
    food: ["Yatai food stalls line the riverbank during the festival"],
    notes: ["~1 million visitors — allow extra time getting home after"],
    schedule: [
      { start: "17:00", end: "18:30", label: "Head to riverbank", kind: "walk" },
      { start: "19:05", end: "20:30", label: "Sumidagawa Fireworks", kind: "activity" },
      { start: "20:30", end: "22:30", label: "Asakusa evening", kind: "activity" },
    ],
    bookings: [
      { label: "TOKYO-W-INN Asakusa · #5660.154.938 PIN 6710", url: TOKYO_W_INN_PDF },
    ] },
  { id: 17, date: "28 Jul", short: "Tue", title: "Fly Tokyo → Delhi", loc: "Haneda", status: "confirmed", phase: "return",
    summary: "✈️ Tokyo → Delhi · overnight transit",
    transport: [{ mode: "plane", text: "Air India 357 · HND 11:50 → DEL 17:30", meta: "9h 10m · 7h transit" }],
    activities: [], food: [], notes: [],
    schedule: [
      { start: "08:30", end: "11:50", label: "Haneda check-in", kind: "walk" },
      { start: "11:50", end: "17:30", label: "AI 357 HND → DEL", kind: "plane" },
      { start: "17:30", end: "23:59", label: "Delhi transit (7h)", kind: "transit" },
    ],
    bookings: [
      { label: "AI 357 · Seat 044K · HND T3 → DEL T3 · 787-8", url: PH_TRAVEL_PDF },
      { label: "PNR FF686P · AI ref XS55VZ", url: PH_TRAVEL_PDF },
    ] },
  { id: 18, date: "29 Jul", short: "Wed", title: "Fly Delhi → London", loc: "Delhi", status: "confirmed", phase: "return",
    summary: "✈️ Delhi → London · home 🏠",
    transport: [{ mode: "plane", text: "Air India 161 · DEL 00:30 → LHR 07:30", meta: "11h 30m" }],
    activities: [], food: [], notes: [],
    schedule: [
      { start: "00:00", end: "00:30", label: "DEL transit ends", kind: "transit" },
      { start: "00:30", end: "07:30", label: "AI 161 DEL → LHR", kind: "plane" },
    ],
    bookings: [
      { label: "AI 161 · Seat 037H · DEL T3 → LHR T2 · A350-900", url: PH_TRAVEL_PDF },
      { label: "PNR FF686P · AI ref XS55VZ", url: PH_TRAVEL_PDF },
    ] },
];


const FLIGHTS = [
  { date: "7 Jul",  route: "LHR → DEL",         detail: "Air India 2016 · 21:05 · Seat 049A · £690 total (all 4 AI flights)", status: "confirmed", gbp: 690,   url: PH_TRAVEL_PDF, urlLabel: "E-ticket FF686P" },
  { date: "8 Jul",  route: "DEL → HND Tokyo",   detail: "Air India 358 · 18:10 · Seat 044K (incl. in LHR→DEL)",              status: "confirmed", gbp: null,  url: PH_TRAVEL_PDF, urlLabel: "E-ticket FF686P" },
  { date: "12 Jul", route: "NRT → CTS Sapporo", detail: "Peach Aviation · 11:50 · £98.98 / ~21,100¥",                        status: "confirmed", gbp: 98.98, url: PEACH_BOOKING_URL },
  { date: "12 Jul", route: "CTS → Wakkanai",    detail: "15:30 → 16:25",                                                     status: "confirmed", gbp: null,  url: "https://uk.trip.com/online/orderdetail/index?orderid=1653714554019095&from=email&template=TRIP_BOOKING_CONFIRMED&locale=en-GB&channel=email&subChannel=TRIP_BOOKING_CONFIRMED&messagecode=TRIP_BOOKING_CONFIRMED&oid=1653714554019095&orderId=1653714554019095&redirectFromOnline=1&accesstoken=", urlLabel: "View on Trip.com" },
  { date: "24 Jul", route: "CTS → NRT Tokyo",   detail: "Peach Aviation · 11:50",                                            status: "confirmed", gbp: null,  url: PEACH_BOOKING_URL },
  { date: "28 Jul", route: "HND → DEL",         detail: "Air India 357 · 11:50 · Seat 044K (incl. in LHR→DEL)",             status: "confirmed", gbp: null,  url: PH_TRAVEL_PDF, urlLabel: "E-ticket FF686P" },
  { date: "29 Jul", route: "DEL → LHR",         detail: "Air India 161 · 00:30 · Seat 037H (incl. in LHR→DEL)",             status: "confirmed", gbp: null,  url: PH_TRAVEL_PDF, urlLabel: "E-ticket FF686P" },
];

const FERRIES = [
  { date: "13 Jul", route: "Wakkanai → Rishiri", detail: "07:15 → 08:55 · ref 2607-07596 · 7,180¥ / £33.65 (2 adults) · £16.83 each", note: "Booked ✓", status: "confirmed", gbp: 16.83, url: HEARTLAND_FERRY, urlLabel: "Manage on Heartland", confUrl: FERRY_WKJ_RISHIRI_CONF },
  { date: "14 Jul", route: "Rishiri → Rebun",    detail: "13:15 → 14:00 · ref 2607-07999 · 1,800¥ / £8.41 per adult",   note: "Booked ✓", status: "confirmed", gbp: 8.41,  url: HEARTLAND_FERRY, urlLabel: "Manage on Heartland", confUrl: FERRY_RISHIRI_REBUN_CONF },
  { date: "17 Jul", route: "Rebun → Wakkanai",   detail: "08:55 → 10:50 · ref 2607-09701 · 3,950¥ / £18.46 per adult",  note: "Booked ✓", status: "confirmed", gbp: 18.46, url: HEARTLAND_FERRY, urlLabel: "Manage on Heartland", confUrl: FERRY_REBUN_WKJ_CONF },
];

const GROUND = [
  { date: "12 Jul", route: "Wakkanai airport → Moshiripa", detail: "Soya bus · ~39 min · cash",                        note: "No pre-book",  status: "gray",    gbp: null },
  { date: "17 Jul", route: "Wakkanai → Asahikawa train",   detail: "13:01 → 16:45",                                    note: "Book 17 Jun!", status: "pending", gbp: null },
  { date: "18 Jul", route: "Asahikawa → Asahidake",        detail: "Bus 66番 · 7:15am · 1,800¥ / £8.45 per adult",     note: "No pre-book",  status: "gray",    gbp: 8.45 },
  { date: "19 Jul", route: "Asahikawa → Furano",           detail: "Lavender Train bus · 9:55am",                      note: "Buy on bus",   status: "gray",    gbp: null },
  { date: "20 Jul", route: "Furano → Sapporo",             detail: "Highway express · 15:40 → 18:24 · 2,700¥ / £12.62 per adult", note: "Buy on day", status: "gray", gbp: 12.62 },
  { date: "23 Jul", route: "Sapporo → Chitose",            detail: "JR rapid · ~35 min",                               note: "Buy on day",   status: "gray",    gbp: null },
];

const STAYS = [
  { dates: "9–12 Jul",  nights: 3, name: "Imano Tokyo Hostel",    loc: "Shinjuku",  cost: "18,857¥ / £88",  status: "confirmed", ref: "Booking.com #6037.580.015 · PIN 5158 · non-refundable · check-in 16:00–23:00", url: IMANO_HOSTEL_PDF, mapUrl: "https://www.google.com/maps/place/Imano+Tokyo+Hostel/@35.6935,139.7077,17z", gbp: 88 },
  { dates: "12–13 Jul", nights: 1, name: "Guest House Moshiripa", loc: "Wakkanai",  cost: "6,996¥ / £33", status: "confirmed", ref: "Booking.com #6413.112.610 · PIN 8709 · breakfast included", url: MOSHIRIPA_PDF, bookingUrl: MOSHIRIPA_URL, mapUrl: "https://www.google.com/maps/place/Guest+House+Moshiripa/@45.4192027,141.6756927,17z", gbp: 33 },
  { dates: "13–14 Jul", nights: 1, name: "Saito Inn さいとう旅館", loc: "Rishiri",   cost: "36,000¥ / £168.70 (2 guests, £84.35 each)", status: "confirmed", ref: "Leika contacted them directly · bikes & ferry pick-up arranged", mapUrl: "https://www.google.com/maps/place/Saito+Inn/@45.244326,141.2193131,17z", gbp: 84.35 },
  { dates: "14–17 Jul", nights: 3, name: "Shimanoyado Rebunshiri", loc: "Rebun",    cost: "72,000¥ / £344 (2 guests, £172 each)", status: "confirmed", ref: "Booking.com #6117.328.292 · PIN 0351 · +81 163 86 2477 · free cancel until 10 Jul", url: REBUNSHIRI_PDF, mapUrl: "https://www.google.com/maps/place/Rebun+Shiri/@45.3019232,141.0469357,17z", gbp: 172 },
  { dates: "17–19 Jul", nights: 2, name: "Buddy House (緑ハイツ)", loc: "Asahikawa", cost: "33,835¥ / £159 (2 guests, £79.50 each)", status: "confirmed", ref: "Booking.com #5278.868.395 · PIN 9824 · +81 166 99 0192 · non-refundable · check-in 16:00–23:00", url: BUDDY_HOUSE_PDF, mapUrl: "https://www.google.com/maps/place/緑ハイツ/@43.7881767,142.3339025,17z", gbp: 79.50 },
  { dates: "19–20 Jul", nights: 1, name: "Hostel Tomar",          loc: "Furano",    cost: "6,900¥ / £32",     status: "confirmed", ref: "Booking.com #5587.910.714 · PIN 9355 · Honcho 2-27, Concierge Furano 3F · check-in 15:00–22:00", url: HOSTEL_TOMAR_PDF, bookingUrl: HOSTEL_TOMAR_URL, mapUrl: "https://www.google.com/maps/place/Tomar+%26+Eversa/@43.3471364,142.388071,17z", gbp: 32 },
  { dates: "20–23 Jul", nights: 3, name: "Grand Hostel LDK",      loc: "Sapporo",   cost: "16,400¥ / £77.48", status: "confirmed", ref: "Booking #409930287671329438 · paid 20 Mar 2026", url: GRAND_HOSTEL_LDK_PDF, bookingUrl: GRAND_HOSTEL_LDK_URL, mapUrl: "https://www.google.com/maps/place/GRAND+HOSTEL+LDK+SAPPORO/@43.0538407,141.3453946,17z", gbp: 77.48 },
  { dates: "23–24 Jul", nights: 1, name: "遊悠館",                 loc: "Chitose",   cost: "7,650¥ / £36",     status: "confirmed", ref: "Booking.com #5255.563.255 · PIN 7684 · free cancel until 21 Jul", url: YUYUKAN_PDF, bookingUrl: YUYUKAN_URL, mapUrl: "https://www.google.com/maps/place/遊悠館/@42.822851,141.6441184,17z", gbp: 36 },
  { dates: "24–28 Jul", nights: 4, name: "TOKYO-W-INN Asakusa",   loc: "Asakusa",   cost: "20,720¥ / £97",   status: "confirmed", ref: "Booking.com #5660.154.938 · PIN 6710 · non-refundable · check-in 16:00–23:00", url: TOKYO_W_INN_PDF, mapUrl: "https://www.google.com/maps/place/TOKYO-W-INN+Asakusa/@35.7083,139.7923,17z", gbp: 97 },
];

const GEORGE = [
  { item: "Imano Tokyo Hostel, Shinjuku",        date: "9–12 Jul",  gbp: 88,     yen: "18,857¥", status: "paid" },
  { item: "Ferry Wakkanai → Rishiri",            date: "13 Jul",    gbp: 16.82,  yen: "3,590¥",  status: "paid" },
  { item: "Saito Inn (incl. dinner both nights)", date: "13–14 Jul", gbp: 84.29,  yen: "18,000¥", status: "unpaid" },
  { item: "Shimanoyado Rebunshiri",              date: "14–17 Jul", gbp: 168.62, yen: "36,000¥", status: "unpaid" },
  { item: "Buddy House, Asahikawa",              date: "17–19 Jul", gbp: 81.00,  yen: "17,297¥", status: "paid" },
  { item: "TOKYO-W-INN Asakusa",                 date: "24–28 Jul", gbp: 97,     yen: "20,720¥", status: "paid" },
];

const MAP_STOPS = [
  { num: 1, name: "Tokyo",          dates: "9–12 Jul & 24–28 Jul", stay: "Imano Hostel · TOKYO-W-INN Asakusa", lat: 35.6762, lng: 139.6503, status: "confirmed" },
  { num: 2, name: "Wakkanai",       dates: "12–13 Jul",            stay: "Guest House Moshiripa",    lat: 45.4192027, lng: 141.6756927, status: "confirmed" },
  { num: 3, name: "Rishiri Island", dates: "13–14 Jul",            stay: "Saito Inn さいとう旅館",   lat: 45.244326,  lng: 141.2193131, status: "confirmed" },
  { num: 4, name: "Rebun Island",   dates: "14–17 Jul",            stay: "Shimanoyado Rebunshiri",   lat: 45.3019232, lng: 141.0469357, status: "confirmed" },
  { num: 5, name: "Asahikawa",      dates: "17–19 Jul",            stay: "Buddy House (緑ハイツ)",   lat: 43.7881767, lng: 142.3339025, status: "confirmed" },
  { num: 6, name: "Furano",         dates: "19–20 Jul",            stay: "Hostel Tomar",             lat: 43.3471364, lng: 142.388071,  status: "confirmed" },
  { num: 7, name: "Sapporo",        dates: "20–23 Jul",            stay: "Grand Hostel LDK",         lat: 43.0538407, lng: 141.3453946, status: "confirmed" },
  { num: 8, name: "Chitose",        dates: "23–24 Jul",            stay: "遊悠館",                   lat: 42.822851,  lng: 141.6441184, status: "confirmed" },
];

const MAP_ROUTES = [
  { from: [35.6762, 139.6503], to: [43.0618, 141.3545], type: "plane", label: "12 Jul · Peach Aviation NRT → CTS" },
  { from: [43.0618, 141.3545], to: [45.4156, 141.6734], type: "plane", label: "12 Jul · CTS → Wakkanai airport" },
  { from: [45.4156, 141.6734], to: [45.2004, 141.2220], type: "ferry", label: "13 Jul · Ferry Wakkanai → Rishiri (Leika booked)" },
  { from: [45.2004, 141.2220], to: [45.3923, 141.0150], type: "ferry", label: "14 Jul · Ferry Rishiri → Rebun ✓" },
  { from: [45.3923, 141.0150], to: [45.4156, 141.6734], type: "ferry", label: "17 Jul · Ferry Rebun → Wakkanai (BOOK)" },
  { from: [45.4156, 141.6734], to: [43.7709, 142.3650], type: "train", label: "17 Jul · Train Wakkanai → Asahikawa (book 17 Jun)" },
  { from: [43.7709, 142.3650], to: [43.3420, 142.3832], type: "bus",   label: "19 Jul · Lavender Train bus → Furano" },
  { from: [43.3420, 142.3832], to: [43.0618, 141.3545], type: "bus",   label: "20 Jul · Highway express bus → Sapporo" },
  { from: [43.0618, 141.3545], to: [42.7791, 141.6866], type: "train", label: "23 Jul · JR rapid → Chitose" },
  { from: [42.7791, 141.6866], to: [35.6762, 139.6503], type: "plane", label: "24 Jul · Peach Aviation CTS → NRT" },
];

const PHASES = [
  { id: "outbound",  label: "Outbound",          dates: "7–9 Jul",   color: "#7a8a73" },
  { id: "tokyo-1",   label: "Tokyo I",           dates: "9–12 Jul",  color: "#c25a4a" },
  { id: "islands",   label: "Northern islands",  dates: "12–17 Jul", color: "#2d6a52" },
  { id: "mainland",  label: "Hokkaido mainland", dates: "17–24 Jul", color: "#3e7a8c" },
  { id: "tokyo-2",   label: "Tokyo II",          dates: "24–28 Jul", color: "#c25a4a" },
  { id: "return",    label: "Return",            dates: "28–29 Jul", color: "#7a8a73" },
];

// Per-day map data: accom = heart pin, route = ordered waypoints (mode on each pt = how you got there),
// pois = interest spots (amber dots, not on route)
const DAY_MAPS = {
  // 10 Jul — Kawaguchiko & Yurari day trip from Shinjuku
  20: {
    accom: { lat: 35.6896, lng: 139.7006, name: "Imano Tokyo Hostel (Shinjuku)" },
    route: [
      { lat: 35.6896, lng: 139.7006, label: "Shinjuku Station" },
      { lat: 35.5120, lng: 138.7640, label: "Kawaguchiko Station", mode: "train" },
      { lat: 35.5133, lng: 138.7627, label: "Funatsuhama boat pier", mode: "walk" },
      { lat: 35.5122, lng: 138.7620, label: "Kachi Kachi mountain", mode: "walk" },
      { lat: 35.5120, lng: 138.7640, label: "Kawaguchiko Station", mode: "walk" },
      { lat: 35.4746, lng: 138.7477, label: "Yurari onsen (Narusawa)", mode: "bus" },
      { lat: 35.5120, lng: 138.7640, label: "Kawaguchiko Station", mode: "bus" },
      { lat: 35.6896, lng: 139.7006, label: "Shinjuku", mode: "bus" },
    ],
    pois: [
      { lat: 35.5133, lng: 138.7627, name: "Funatsuhama boat pier" },
      { lat: 35.5122, lng: 138.7620, name: "Kachi Kachi mountain / ropeway" },
      { lat: 35.4746, lng: 138.7477, name: "Fuji Choribo-no-Yu Yurari" },
    ],
  },
  // 12 Jul — Tokyo → CTS → Wakkanai
  4: {
    accom: { lat: 45.4192027, lng: 141.6756927, name: "Guest House Moshiripa" },
    route: [
      { lat: 35.765,  lng: 140.386,  label: "Narita (NRT)" },
      { lat: 42.775,  lng: 141.692,  label: "New Chitose (CTS)",    mode: "plane" },
      { lat: 45.401,  lng: 141.800,  label: "Wakkanai Airport",     mode: "plane" },
      { lat: 45.4156, lng: 141.6734, label: "Moshiripa",            mode: "bus"   },
    ],
    pois: [
      { lat: 45.421, lng: 141.676, name: "Port Breakwater Dome" },
    ],
  },
  // 13 Jul — Ferry to Rishiri + cycling
  5: {
    accom: { lat: 45.244326, lng: 141.2193131, name: "Saito Inn さいとう旅館" },
    route: [
      { lat: 45.416,  lng: 141.677,  label: "Wakkanai ferry terminal" },
      { lat: 45.2004, lng: 141.2220, label: "Rishiri (Oshidomari)", mode: "ferry" },
    ],
    pois: [],
  },
  // 14 Jul — Rishiri morning → Ferry to Rebun
  6: {
    accom: { lat: 45.3019232, lng: 141.0469357, name: "Shimanoyado Rebunshiri" },
    route: [
      { lat: 45.2004, lng: 141.2220, label: "Oshidomari port, Rishiri" },
      { lat: 45.3034, lng: 141.0407, label: "Kafuka, Rebun", mode: "ferry" },
    ],
    pois: [
      { lat: 45.299, lng: 141.033, name: "Rebun Folk Museum" },
      { lat: 45.311, lng: 141.046, name: "Rebun Onsen Usuyuki-no-Yu" },
    ],
  },
  // 15 Jul — Rebun cycling
  7: {
    accom: { lat: 45.3019232, lng: 141.0469357, name: "Shimanoyado Rebunshiri" },
    route: null,
    pois: [
      { lat: 45.293, lng: 141.026, name: "Momoiwa Observatory" },
      { lat: 45.422, lng: 141.013, name: "Kitano Canary Park" },
    ],
  },
  // 16 Jul — Forest hike + bus
  8: {
    accom: { lat: 45.3019232, lng: 141.0469357, name: "Shimanoyado Rebunshiri" },
    route: null,
    pois: [
      { lat: 45.380, lng: 141.010, name: "Rebun Forest Road" },
      { lat: 45.293, lng: 141.026, name: "Momoiwa Observatory" },
      { lat: 45.307, lng: 141.040, name: "Café Ruwe" },
    ],
  },
  // 17 Jul — Rebun → Wakkanai → Asahikawa
  9: {
    accom: { lat: 43.7881767, lng: 142.3339025, name: "Buddy House (緑ハイツ)" },
    route: [
      { lat: 45.3034, lng: 141.0407, label: "Kafuka, Rebun" },
      { lat: 45.416,  lng: 141.677,  label: "Wakkanai ferry terminal", mode: "ferry" },
      { lat: 45.4156, lng: 141.6734, label: "Wakkanai station" },
      { lat: 43.7709, lng: 142.3650, label: "Asahikawa",              mode: "train" },
    ],
    pois: [],
  },
  // 18 Jul — Asahidake hike
  10: {
    accom: { lat: 43.7881767, lng: 142.3339025, name: "Buddy House (緑ハイツ)" },
    route: [
      { lat: 43.7881767, lng: 142.3339025, label: "Asahikawa (Buddy House)" },
      { lat: 43.664,  lng: 142.855,  label: "Asahidake Onsen",  mode: "bus" },
      { lat: 43.696,  lng: 142.658,  label: "Higashikawa",      mode: "bus" },
      { lat: 43.7881767, lng: 142.3339025, label: "Asahikawa",   mode: "bus" },
    ],
    pois: [],
  },
  // 19 Jul — Asahikawa → Furano
  11: {
    accom: { lat: 43.3471364, lng: 142.388071, name: "Hostel Tomar" },
    route: [
      { lat: 43.7881767, lng: 142.3339025, label: "Asahikawa (Buddy House)" },
      { lat: 43.3420, lng: 142.3832, label: "Furano",      mode: "bus"   },
      { lat: 43.3551, lng: 142.4607, label: "Farm Tomita", mode: "train" },
      { lat: 43.3420, lng: 142.3832, label: "Furano",      mode: "train" },
    ],
    pois: [
      { lat: 43.354, lng: 142.376, name: "Ningle Terrace" },
    ],
  },
  // 20 Jul — Blue Pond → Sapporo
  12: {
    accom: { lat: 43.0538407, lng: 141.3453946, name: "Grand Hostel LDK" },
    route: [
      { lat: 43.3471364, lng: 142.388071, label: "Hostel Tomar, Furano" },
      { lat: 43.4934, lng: 142.6142, label: "Blue Pond (Aoiike)", mode: "bus" },
      { lat: 43.3420, lng: 142.3832, label: "Furano",             mode: "bus" },
      { lat: 43.0538407, lng: 141.3453946, label: "Sapporo",       mode: "bus" },
    ],
    pois: [
      { lat: 43.502, lng: 142.638, name: "Shirogane Falls" },
    ],
  },
  // 21 Jul — Sapporo day 1 · Nature & City Streets
  13: {
    accom: { lat: 43.0538407, lng: 141.3453946, name: "Grand Hostel LDK" },
    route: [
      { lat: 43.0575, lng: 141.3106, label: "Mt. Maruyama" },
      { lat: 43.0571, lng: 141.3192, label: "Maruyama Area",   mode: "train" },
      { lat: 43.0596, lng: 141.3232, label: "Hokkaido Shrine", mode: "train" },
      { lat: 43.0554, lng: 141.3528, label: "Tanuki Koji",     mode: "train" },
      { lat: 43.0513, lng: 141.3561, label: "Susukino",        mode: "train" },
    ],
    pois: [
      { lat: 43.0575, lng: 141.3106, name: "Mt. Maruyama" },
      { lat: 43.0571, lng: 141.3192, name: "Maruyama Area / Urasando" },
      { lat: 43.0596, lng: 141.3232, name: "Hokkaido Shrine" },
      { lat: 43.0554, lng: 141.3528, name: "Tanuki Koji Shopping Street" },
      { lat: 43.0513, lng: 141.3561, name: "Susukino" },
    ],
  },
  // 22 Jul — Sapporo day 2 · Seasonal Highlights
  14: {
    accom: { lat: 43.0538407, lng: 141.3453946, name: "Grand Hostel LDK" },
    route: [
      { lat: 42.9715, lng: 141.3698, label: "Hill of the Buddha" },
      { lat: 42.9835, lng: 141.3270, label: "Sapporo Art Park",    mode: "bus"   },
      { lat: 43.0768, lng: 141.3400, label: "Hokkaido University", mode: "train" },
      { lat: 43.0270, lng: 141.3148, label: "Mt. Moiwa",           mode: "train" },
      { lat: 43.0554, lng: 141.3528, label: "Tanuki Koji",         mode: "train" },
    ],
    pois: [
      { lat: 42.9715, lng: 141.3698, name: "Hill of the Buddha" },
      { lat: 42.9835, lng: 141.3270, name: "Sapporo Art Park" },
      { lat: 43.0768, lng: 141.3400, name: "Hokkaido University" },
      { lat: 43.0270, lng: 141.3148, name: "Mt. Moiwa" },
      { lat: 43.0554, lng: 141.3528, name: "Tanuki Koji Shopping Street" },
    ],
  },
  // 23 Jul — Sapporo day 3 · Iconic Sights → Chitose
  15: {
    accom: { lat: 42.822851, lng: 141.6441184, name: "遊悠館, Chitose" },
    route: [
      { lat: 43.0630, lng: 141.3535, label: "Sapporo Clock Tower" },
      { lat: 43.0607, lng: 141.3585, label: "Nijo Market",          mode: "train" },
      { lat: 43.0613, lng: 141.3561, label: "Sapporo TV Tower",     mode: "train" },
      { lat: 43.0613, lng: 141.3497, label: "Odori Park",           mode: "train" },
      { lat: 43.0567, lng: 141.3510, label: "Ramen Alley",          mode: "train" },
      { lat: 43.0554, lng: 141.3528, label: "Tanuki Koji",          mode: "train" },
      { lat: 43.0685, lng: 141.3680, label: "Sapporo Beer Garden",  mode: "bus"   },
      { lat: 43.0538407, lng: 141.3453946, label: "Grand Hostel LDK (bags)", mode: "bus" },
      { lat: 42.822851,  lng: 141.6441184, label: "Chitose (遊悠館)", mode: "train" },
    ],
    pois: [
      { lat: 43.0630, lng: 141.3535, name: "Sapporo Clock Tower" },
      { lat: 43.0607, lng: 141.3585, name: "Nijo Market" },
      { lat: 43.0613, lng: 141.3561, name: "Sapporo TV Tower" },
      { lat: 43.0613, lng: 141.3497, name: "Odori Park" },
      { lat: 43.0567, lng: 141.3510, name: "Ganso Sapporo Ramen Alley" },
      { lat: 43.0554, lng: 141.3528, name: "Tanuki Koji Shopping Street" },
      { lat: 43.0685, lng: 141.3680, name: "Sapporo Beer Garden & Museum" },
    ],
  },
  // 24 Jul — Fly CTS → NRT
  16: {
    accom: null,
    route: [
      { lat: 42.775, lng: 141.692, label: "New Chitose (CTS)" },
      { lat: 35.765, lng: 140.386, label: "Narita (NRT)", mode: "plane" },
    ],
    pois: [],
  },
};

window.TRIP_DATA = { TRIP, URGENT, DAYS, FLIGHTS, FERRIES, GROUND, STAYS, GEORGE, MAP_STOPS, MAP_ROUTES, PHASES, DAY_MAPS };
