// All trip data — kept in plain JS so it's easy for you to edit by hand.

const TRIP = {
  start: "2026-07-07",
  end: "2026-07-29",
  today: "2026-05-19",
};

const URGENT = [
  {
    type: "pending",
    title: "Get booking ref: Wakkanai → Rishiri ferry (13 Jul, 07:15)",
    body: "Leika has booked it on your behalf — ask her for the confirmation reference so it's on hand for the day.",
    deadline: "This week",
  },
  {
    type: "pending",
    title: "Book on 17 June: Wakkanai → Asahikawa train (13:01 → 16:45)",
    body: "Opens exactly 1 month before. Set a calendar reminder.",
    deadline: "17 Jun",
  },
  {
    type: "urgent",
    title: "Tokyo accommodation — 7 nights unaccounted (9–12 Jul & 24–28 Jul)",
    body: "Check whether these are booked somewhere not in the docs you shared.",
    deadline: "Critical",
  },
];

const SOYA_BUS_REBUN_B = "uploads/soya-bus-rebun-b-ticket.pdf";

const PH_TRAVEL_PDF = "uploads/ph-travel-eticket-FF686P-v2.pdf";
const PH_TRAVEL_PNR = "FF686P";       // Brightsun/PH Travel reservation code
const PH_TRAVEL_AI_PNR = "XS55VZ";    // Air India confirmation number
const PH_TRAVEL_TKT = "0986393639706";
const TRIPCOM_CTS_WKJ = "https://uk.trip.com/online/orderdetail/index?orderid=1653714554019095&from=email&template=TRIP_BOOKING_CONFIRMED&locale=en-GB&channel=email&subChannel=TRIP_BOOKING_CONFIRMED&messagecode=TRIP_BOOKING_CONFIRMED&oid=1653714554019095&orderId=1653714554019095&redirectFromOnline=1&accesstoken=";
const HEARTLAND_FERRY = "https://reserve.heartlandferry.jp/hlf/wrv/webmgr.php?ifc_manager=login.view&lang_kbn=2";
const REBUNSHIRI_PDF = "uploads/rebun-accom-14-17.pdf";
const BUDDY_HOUSE_PDF = "uploads/asahikawa buddy house accom 17-19.pdf";
const MOSHIRIPA_URL = "https://secure.booking.com/confirmation.en-gb.html?aid=812878&label=metaskyscan-uk-desktop-hotel-4974409_bw-53_los-1_lang-en_curr-GBP_group-3_gst-1_cid-20260712_dow-Sunday_fc-false_tod-17_mktgrp-_clkid-7baa3c8b-d71b-444e-a08b-b710eea6c1c3&sid=2b15b1e88d7a3ed0ecb5e6b16f61cbbd&auth_key=qesWroP67MzKW5Rd&bp_travel_purpose=leisure&hostname=www.booking.com&is_bsd_shown=1&pfi=10776413112610&pre_pbb_price=6996&pre_price=6996&rt_num_blocks=8&send_sms_confirmation=1&source=book&srpvid=41857171cade02ee&ua_created=0&";
const HOSTEL_TOMAR_URL = "https://secure.booking.com/confirmation.en-gb.html?aid=304142&label=gen173bo-10EgxjaGFuZ2VfZGF0ZXMoggI46AdIM1gDaFCIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGYAgSoAgG4AoC0stAGwAIB0gIkNmI1OGNhMzItMDE1MS00MmMxLWIwOTYtNjEwZjA3OWZlMTJi2AIB4AIB&auth_key=4kbojz0RkYW3Iwlh&source=change_dates";
const GRAND_HOSTEL_LDK_URL = "https://secure.booking.com/tpi_confirmation.en-gb.html?label=gen173nr-10CAEoggI46AdIM1gEaFCIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4ApfhsdAGwAIB0gIkM2UwZWZjNDAtMzdkYi00ZGFhLWJkY2MtMTg0OWNjMDc5YWY12AIB4AIB&sid=65b31a614012a9a856133d0082479adc&aid=304142&ws_auth_key=MYLaeZPBNiEsg1gS";
const YUYUKAN_URL = "https://secure.booking.com/confirmation.en-gb.html?label=gen173nr-10CAEoggI46AdIM1gEaFCIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4ApfhsdAGwAIB0gIkM2UwZWZjNDAtMzdkYi00ZGFhLWJkY2MtMTg0OWNjMDc5YWY12AIB4AIB&sid=65b31a614012a9a856133d0082479adc&aid=304142&auth_key=pOdhkljxz4xcZzYz&source=mytrips";

const PEACH_BOOKING_URL = "https://flights.booking.com/booking/order-details/524ccbdfa11eff43e7b770e9b734b5650aa073efedb656ca68dff1022615a87d5288f48e1fa3bea71cf58f2249dfcc66be08f4eb88d420a6ebc8c0e158e925279c07eb0d93cf359290af0e139ff0?";

const DAYS = [
  { id: 1, date: "7 Jul", short: "Tue", title: "Fly London → Delhi", loc: "Heathrow", status: "confirmed", phase: "outbound",
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
  { id: 3, date: "9–12 Jul", short: "Thu–Sun", title: "Tokyo (first stretch)", loc: "Tokyo", status: "urgent", phase: "tokyo-1",
    transport: [{ mode: "plane", text: "Arrive Haneda 5:55am on 9 Jul", meta: "Three full days before Hokkaido" }],
    activities: ["3 days to explore Tokyo before the Hokkaido leg — itinerary still loose"],
    food: [],
    notes: ["⚠️ Accommodation not confirmed in any docs you shared — check this is booked"] },
  { id: 4, date: "12 Jul", short: "Sun", title: "Tokyo → Sapporo → Wakkanai", loc: "Wakkanai", status: "confirmed", phase: "islands",
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
      { label: "Guest House Moshiripa (Booking.com)", url: MOSHIRIPA_URL },
    ] },
  { id: 5, date: "13 Jul", short: "Mon", title: "Ferry to Rishiri + cycling", loc: "Rishiri Island", status: "pending", phase: "islands",
    transport: [
      { mode: "walk", text: "Leave Moshiripa 6:30am · 15-min walk to ferry terminal", meta: "Set alarm — early start" },
      { mode: "ferry", text: "Ferry Wakkanai → Rishiri · 07:15 → 08:55", meta: "7,180¥ / £33.65 each · Leika has booked — get ref" },
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
    ] },
  { id: 6, date: "14 Jul", short: "Tue", title: "Rishiri morning → Ferry to Rebun", loc: "Rebun Island", status: "confirmed", phase: "islands",
    transport: [
      { mode: "bike", text: "Morning: shorter cycling course on Rishiri", meta: "Bikes still from Saito Ryokan" },
      { mode: "ferry", text: "Ferry Oshidomari → Kafuka · 13:15 → 14:00", meta: "BOOKED · ref 2607-07999 ✓" },
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
      { label: "Shimanoyado Rebunshiri · #6117.328.292 PIN 0351", url: REBUNSHIRI_PDF },
    ] },
  { id: 7, date: "15 Jul", short: "Wed", title: "Rebun cycling day", loc: "Rebun Island", status: "confirmed", phase: "islands",
    transport: [
      { mode: "bike", text: "Rent from Cat Rock", meta: "3,000¥ / ~£14 · 24hr" },
    ],
    activities: [
      { text: "Course 13 first — sunrise at Momoiwa Observatory", url: "uploads/rebun-cycling-routes.png", urlLabel: "Route map" },
      { text: "Course 15 — Kitano Canary Park (café attached)", url: "uploads/rebun-cycling-routes.png", urlLabel: "Route map" },
      { text: "Course 14 last", url: "uploads/rebun-cycling-routes.png", urlLabel: "Route map" },
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
    transport: [
      { mode: "ferry", text: "Check out · Ferry Rebun → Wakkanai · 08:55 → 10:50", meta: "BOOKED · ref 2607-09701 ✓" },
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
      { label: "Buddy House · #5278.868.395 PIN 9824", url: BUDDY_HOUSE_PDF },
    ] },
  { id: 10, date: "18 Jul", short: "Sat", title: "Asahidake hike + cable car", loc: "Asahikawa / Asahidake", status: "confirmed", phase: "mainland",
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
  { id: 11, date: "19 Jul", short: "Sun", title: "Asahikawa → Furano · lavender", loc: "Furano", status: "pending", phase: "mainland",
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
      { label: "Hostel Tomar (Booking.com)", url: HOSTEL_TOMAR_URL },
      { label: "Furano bus routes", url: "https://www.furanobus.jp/rosen/" },
    ] },
  { id: 12, date: "20 Jul", short: "Mon", title: "Blue Pond → Sapporo", loc: "Sapporo", status: "confirmed", phase: "mainland",
    transport: [
      { mode: "walk", text: "Check out 7:00am · store luggage at hostel", meta: "", mapQuery: "064-0805 Hokkaido Sapporo Chuo-ku Minami 5 jo Nishi 9 chome 1008-10" },
      { mode: "bus", text: "~1h 40min to Shirogane Blue Pond · +25-min walk to the Falls", meta: "Back by ~1:20pm" },
      { mode: "bus", text: "Highway express bus · 15:40 → Sapporo 18:24", meta: "2,700¥ · Buy on the day at Furano station",
        guide: {
          title: "Highway Furano 高速ふらの号",
          rows: [
            { label: "Bus",    value: "Line 28 · Highway Furano (高速ふらの号)" },
            { label: "Depart", value: "Furano-ekimae (Furano Sta.) · 15:40" },
            { label: "Arrive", value: "Sapporo Station bus stop · 18:15" },
            { label: "Ticket", value: "2,700¥ · buy at station on the day" },
            { label: "Walk",   value: "9 min from bus stop → Exit 9 · arrive 18:24" },
          ],
        },
      },
      { mode: "train", text: "22-min train → Grand Hostel LDK", meta: "" },
    ],
    activities: ["Shirogane Blue Pond", "Shirogane Taki Falls"],
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
      { label: "Grand Hostel LDK Sapporo", url: GRAND_HOSTEL_LDK_URL },
      { label: "Directions: Tomar → Blue Pond", url: "https://www.google.com/maps/dir/Tomar+%26+Eversa+(Hostel+and+Cafe+Lounge),+%E3%82%B3%E3%83%B3%E3%82%B7%E3%82%A7%E3%83%AB%E3%82%B8%E3%83%A5+%E3%83%95%E3%83%A9%E3%83%8E%E5%86%85+2-27+Motomachi,+Furano,+Hokkaido+076-0031,+Japan/Shirogane+Blue+Pond+(Aoiike),+Shirogane,+Biei,+Kamikawa+District,+Hokkaido+071-0235,+Japan/@43.4948001,142.3340925,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x5f734d29ea305185:0xd172fb3995cdbe!2m2!1d142.388071!2d43.3471364!1m5!1m1!1s0x5f0ccc62de222a6f:0x4cd181f9f4b779e!2m2!1d142.6142144!2d43.4934738!3e3?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D" },
    ] },
  { id: 13, date: "21 Jul", short: "Tue", title: "Sapporo day 1", loc: "Sapporo", status: "confirmed", phase: "mainland",
    transport: [],
    activities: [
      "Hike Mt. Maruyama",
      "Hokkaido Shrine",
      "Tanuki Koji Shopping Street",
      "Susukino in the evening",
    ],
    food: [], notes: [],
    schedule: [
      { start: "08:00", end: "12:00", label: "Mt. Maruyama hike", kind: "activity" },
      { start: "12:00", end: "13:30", label: "Lunch", kind: "food" },
      { start: "13:30", end: "15:30", label: "Hokkaido Shrine", kind: "activity" },
      { start: "15:30", end: "18:00", label: "Tanuki Koji", kind: "activity" },
      { start: "18:00", end: "23:00", label: "Susukino · dinner", kind: "food" },
    ],
    bookings: [
      { label: "Grand Hostel LDK Sapporo", url: GRAND_HOSTEL_LDK_URL },
    ] },
  { id: 14, date: "22 Jul", short: "Wed", title: "Sapporo day 2", loc: "Sapporo", status: "confirmed", phase: "mainland",
    transport: [
      { mode: "bus", text: "9:15am bus · Makomanai sta. line 2 · 35 min", meta: "→ Hill of the Buddha" },
    ],
    activities: [
      "Hill of the Buddha",
      "Sapporo Art Park",
      "Hokkaido University",
      "Mt. Moiwa",
      "Tanuki Koji again",
    ],
    food: [], notes: [],
    schedule: [
      { start: "09:15", end: "09:50", label: "Bus → Makomanai", kind: "bus" },
      { start: "10:00", end: "12:00", label: "Hill of the Buddha", kind: "activity" },
      { start: "12:30", end: "14:30", label: "Sapporo Art Park", kind: "activity" },
      { start: "14:30", end: "16:30", label: "Hokkaido Univ.", kind: "activity" },
      { start: "16:30", end: "19:00", label: "Mt. Moiwa", kind: "activity" },
      { start: "19:00", end: "22:00", label: "Tanuki Koji · dinner", kind: "food" },
    ],
    bookings: [
      { label: "Grand Hostel LDK Sapporo", url: GRAND_HOSTEL_LDK_URL },
    ] },
  { id: 15, date: "23 Jul", short: "Thu", title: "Sapporo day 3 → Chitose", loc: "Sapporo / Chitose", status: "confirmed", phase: "mainland",
    transport: [
      { mode: "train", text: "JR rapid Sapporo → Chitose · ~35 min", meta: "Evening" },
    ],
    activities: [
      "Sapporo Clock Tower",
      "Nijo Market",
      "TV Tower & Odori Park",
      "Ramen Alley (Ganso Sapporo Ramen Yokocho)",
      "Tanuki Koji",
      "Sapporo Beer Museum (maybe)",
    ],
    food: ["Lunch / dinner: Ganso Sapporo Ramen Yokocho"],
    notes: [
      "Check out Grand Hostel LDK · store luggage · head to Chitose · 遊悠館 (£36 ✓)",
    ],
    schedule: [
      { start: "09:00", end: "11:00", label: "Clock Tower + Nijo", kind: "activity" },
      { start: "11:00", end: "12:30", label: "Ramen Alley", kind: "food" },
      { start: "12:30", end: "15:00", label: "TV Tower + Odori", kind: "activity" },
      { start: "15:00", end: "17:00", label: "Tanuki Koji", kind: "activity" },
      { start: "17:00", end: "18:00", label: "Beer Museum (maybe)", kind: "activity" },
      { start: "18:00", end: "19:00", label: "Pickup bags + train", kind: "train" },
      { start: "19:00", end: "20:30", label: "Check in Chitose", kind: "stay" },
    ],
    bookings: [
      { label: "遊悠館 Chitose", url: YUYUKAN_URL },
    ] },
  { id: 16, date: "24 Jul", short: "Fri", title: "Fly Sapporo → Tokyo", loc: "Tokyo", status: "urgent", phase: "tokyo-2",
    transport: [
      { mode: "walk", text: "Arrive New Chitose by 11:30am", meta: "" },
      { mode: "plane", text: "Peach Aviation CTS → NRT · 11:50 → 13:35", meta: "Confirmed" },
    ],
    activities: ["4 more days in Tokyo (24–28 Jul)"],
    food: [],
    notes: ["⚠️ Post-Hokkaido Tokyo accommodation not confirmed in docs"],
    schedule: [
      { start: "09:00", end: "11:30", label: "To New Chitose", kind: "walk" },
      { start: "11:50", end: "13:35", label: "Peach CTS → NRT", kind: "plane" },
      { start: "13:35", end: "15:30", label: "NRT → Tokyo centre", kind: "train" },
      { start: "15:30", end: "17:30", label: "Check in + rest", kind: "stay" },
      { start: "18:00", end: "22:00", label: "Tokyo evening", kind: "activity" },
    ],
    bookings: [
      { label: "Peach CTS → NRT", url: PEACH_BOOKING_URL },
    ] },
  { id: 17, date: "28 Jul", short: "Tue", title: "Fly Tokyo → Delhi", loc: "Haneda", status: "confirmed", phase: "return",
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
  { date: "7 Jul",  route: "LHR → DEL",         detail: "Air India 2016 · 21:05 · Seat 049A", status: "confirmed", url: PH_TRAVEL_PDF, urlLabel: "E-ticket FF686P" },
  { date: "8 Jul",  route: "DEL → HND Tokyo",   detail: "Air India 358 · 18:10 · Seat 044K",  status: "confirmed", url: PH_TRAVEL_PDF, urlLabel: "E-ticket FF686P" },
  { date: "12 Jul", route: "NRT → CTS Sapporo", detail: "Peach Aviation · 11:50 · £98.98 / ~21,100¥", status: "confirmed", url: PEACH_BOOKING_URL },
  { date: "12 Jul", route: "CTS → Wakkanai",    detail: "15:30 → 16:25",                  status: "confirmed", url: "https://uk.trip.com/online/orderdetail/index?orderid=1653714554019095&from=email&template=TRIP_BOOKING_CONFIRMED&locale=en-GB&channel=email&subChannel=TRIP_BOOKING_CONFIRMED&messagecode=TRIP_BOOKING_CONFIRMED&oid=1653714554019095&orderId=1653714554019095&redirectFromOnline=1&accesstoken=", urlLabel: "View on Trip.com" },
  { date: "24 Jul", route: "CTS → NRT Tokyo",   detail: "Peach Aviation · 11:50",         status: "confirmed", url: PEACH_BOOKING_URL },
  { date: "28 Jul", route: "HND → DEL",         detail: "Air India 357 · 11:50 · Seat 044K", status: "confirmed", url: PH_TRAVEL_PDF, urlLabel: "E-ticket FF686P" },
  { date: "29 Jul", route: "DEL → LHR",         detail: "Air India 161 · 00:30 · Seat 037H", status: "confirmed", url: PH_TRAVEL_PDF, urlLabel: "E-ticket FF686P" },
];

const FERRIES = [
  { date: "13 Jul", route: "Wakkanai → Rishiri", detail: "07:15 → 08:55 · 7,180¥ / £33.65 each",    note: "Leika booked", status: "pending" },
  { date: "14 Jul", route: "Rishiri → Rebun",    detail: "13:15 → 14:00 · ref 2607-07999", note: "Booked ✓", status: "confirmed", url: "https://reserve.heartlandferry.jp/hlf/wrv/webmgr.php?ifc_manager=login.view&lang_kbn=2", urlLabel: "Manage on Heartland" },
  { date: "17 Jul", route: "Rebun → Wakkanai",   detail: "08:55 → 10:50 · ref 2607-09701", note: "Booked ✓", status: "confirmed", url: HEARTLAND_FERRY, urlLabel: "Manage on Heartland" },
];

const GROUND = [
  { date: "12 Jul", route: "Wakkanai airport → Moshiripa", detail: "Soya bus · ~39 min · cash",         note: "No pre-book",   status: "gray" },
  { date: "17 Jul", route: "Wakkanai → Asahikawa train",   detail: "13:01 → 16:45",                     note: "Book 17 Jun!",  status: "pending" },
  { date: "18 Jul", route: "Asahikawa → Asahidake",        detail: "Bus 66番 · 7:15am · 1,800¥ / ~£8.45",         note: "No pre-book",   status: "gray" },
  { date: "19 Jul", route: "Asahikawa → Furano",           detail: "Lavender Train bus · 9:55am",       note: "Buy on bus",    status: "gray" },
  { date: "20 Jul", route: "Furano → Sapporo",             detail: "Highway express · 15:40 → 18:24",   note: "Buy on day",    status: "gray" },
  { date: "23 Jul", route: "Sapporo → Chitose",            detail: "JR rapid · ~35 min",                note: "Buy on day",    status: "gray" },
];

const STAYS = [
  { dates: "9–12 Jul",  nights: 3, name: "Tokyo accommodation",   loc: "Tokyo",     cost: "—",              status: "urgent",    ref: "Not in your docs" },
  { dates: "12–13 Jul", nights: 1, name: "Guest House Moshiripa", loc: "Wakkanai",  cost: "£69.96 (Booking.com)", status: "confirmed", ref: "Booking.com confirmation ✓", url: MOSHIRIPA_URL,
    mapUrl: "https://www.google.com/maps/place/Guest+House+Moshiripa/@45.4192027,141.6756927,17z" },
  { dates: "13–14 Jul", nights: 1, name: "Saito Inn さいとう旅館", loc: "Rishiri",   cost: "36,000¥ / £168.70", status: "confirmed", ref: "Leika contacted them directly · bikes & ferry pick-up arranged",
    mapUrl: "https://www.google.com/maps/place/Saito+Inn/@45.244326,141.2193131,17z" },
  { dates: "14–17 Jul", nights: 3, name: "Shimanoyado Rebunshiri", loc: "Rebun",    cost: "¥72,000 / £344",   status: "confirmed", ref: "Booking.com #6117.328.292 · PIN 0351 · +81 163 86 2477 · free cancel until 10 Jul", url: REBUNSHIRI_PDF,
    mapUrl: "https://www.google.com/maps/place/Rebun+Shiri/@45.3019232,141.0469357,17z" },
  { dates: "17–19 Jul", nights: 2, name: "Buddy House (緑ハイツ)", loc: "Asahikawa", cost: "¥33,835 / £159",   status: "confirmed", ref: "Booking.com #5278.868.395 · PIN 9824 · +81 166 99 0192 · non-refundable · check-in 16:00–23:00", url: BUDDY_HOUSE_PDF,
    mapUrl: "https://www.google.com/maps/place/緑ハイツ/@43.7881767,142.3339025,17z" },
  { dates: "19–20 Jul", nights: 1, name: "Hostel Tomar",          loc: "Furano",    cost: "6,900¥ / £32.30",  status: "confirmed", ref: "Honcho 2-27, Concierge Furano 3F · check-in 15:00–22:00", url: "https://secure.booking.com/confirmation.en-gb.html?aid=304142&label=gen173bo-10EgxjaGFuZ2VfZGF0ZXMoggI46AdIM1gDaFCIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGYAgSoAgG4AoC0stAGwAIB0gIkNmI1OGNhMzItMDE1MS00MmMxLWIwOTYtNjEwZjA3OWZlMTJi2AIB4AIB&auth_key=4kbojz0RkYW3Iwlh&source=change_dates",
    mapUrl: "https://www.google.com/maps/place/Tomar+%26+Eversa/@43.3471364,142.388071,17z" },
  { dates: "20–23 Jul", nights: 3, name: "Grand Hostel LDK",      loc: "Sapporo",   cost: "16,400¥ / £77",    status: "confirmed", ref: "Partner offer · paid", url: "https://secure.booking.com/tpi_confirmation.en-gb.html?label=gen173nr-10CAEoggI46AdIM1gEaFCIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4ApfhsdAGwAIB0gIkM2UwZWZjNDAtMzdkYi00ZGFhLWJkY2MtMTg0OWNjMDc5YWY12AIB4AIB&sid=65b31a614012a9a856133d0082479adc&aid=304142&ws_auth_key=MYLaeZPBNiEsg1gS",
    mapUrl: "https://www.google.com/maps/place/GRAND+HOSTEL+LDK+SAPPORO/@43.0538407,141.3453946,17z" },
  { dates: "23–24 Jul", nights: 1, name: "遊悠館",                 loc: "Chitose",   cost: "7,670¥ / £36",     status: "confirmed", ref: "Free cancellation", url: "https://secure.booking.com/confirmation.en-gb.html?label=gen173nr-10CAEoggI46AdIM1gEaFCIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4ApfhsdAGwAIB0gIkM2UwZWZjNDAtMzdkYi00ZGFhLWJkY2MtMTg0OWNjMDc5YWY12AIB4AIB&sid=65b31a614012a9a856133d0082479adc&aid=304142&auth_key=pOdhkljxz4xcZzYz&source=mytrips",
    mapUrl: "https://www.google.com/maps/place/遊悠館/@42.822851,141.6441184,17z" },
  { dates: "24–28 Jul", nights: 4, name: "Tokyo accommodation",   loc: "Tokyo",     cost: "—",              status: "urgent",    ref: "Not in your docs" },
];

const GEORGE = [
  { item: "Ferry Wakkanai → Rishiri",            date: "13 Jul",    gbp: 16.82,  yen: "3,590¥",  status: "paid" },
  { item: "Saito Inn (incl. dinner both nights)", date: "13–14 Jul", gbp: 84.29,  yen: "18,000¥", status: "unpaid" },
  { item: "Shimanoyado Rebunshiri",              date: "14–17 Jul", gbp: 168.62, yen: "36,000¥", status: "unpaid" },
  { item: "Buddy House, Asahikawa",              date: "17–19 Jul", gbp: 81.00,  yen: "17,297¥", status: "paid" },
];

const MAP_STOPS = [
  { num: 1, name: "Tokyo",          dates: "9–12 Jul & 24–28 Jul", stay: "Accommodation TBC",        lat: 35.6762,    lng: 139.6503,    status: "urgent" },
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
  // 21 Jul — Sapporo day 1
  13: {
    accom: { lat: 43.0538407, lng: 141.3453946, name: "Grand Hostel LDK" },
    route: null,
    pois: [
      { lat: 43.063, lng: 141.311, name: "Mt. Maruyama" },
      { lat: 43.063, lng: 141.313, name: "Hokkaido Shrine" },
      { lat: 43.060, lng: 141.352, name: "Tanuki Koji" },
      { lat: 43.056, lng: 141.354, name: "Susukino" },
    ],
  },
  // 22 Jul — Sapporo day 2
  14: {
    accom: { lat: 43.0538407, lng: 141.3453946, name: "Grand Hostel LDK" },
    route: [
      { lat: 43.0538407, lng: 141.3453946, label: "Grand Hostel LDK" },
      { lat: 43.001, lng: 141.345, label: "Makomanai",        mode: "bus" },
    ],
    pois: [
      { lat: 42.997, lng: 141.323, name: "Hill of the Buddha" },
      { lat: 43.009, lng: 141.245, name: "Sapporo Art Park" },
      { lat: 43.076, lng: 141.340, name: "Hokkaido University" },
      { lat: 43.037, lng: 141.307, name: "Mt. Moiwa" },
    ],
  },
  // 23 Jul — Sapporo day 3 → Chitose
  15: {
    accom: { lat: 42.822851, lng: 141.6441184, name: "遊悠館, Chitose" },
    route: [
      { lat: 43.0538407, lng: 141.3453946, label: "Grand Hostel LDK" },
      { lat: 42.822851,  lng: 141.6441184, label: "Chitose (遊悠館)",  mode: "train" },
    ],
    pois: [
      { lat: 43.061, lng: 141.353, name: "Clock Tower + Nijo Market" },
      { lat: 43.061, lng: 141.356, name: "TV Tower + Odori Park" },
      { lat: 43.063, lng: 141.350, name: "Ramen Alley (Ganso)" },
      { lat: 43.068, lng: 141.346, name: "Sapporo Beer Museum" },
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
