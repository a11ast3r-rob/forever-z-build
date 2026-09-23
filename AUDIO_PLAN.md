# Audio + Acoustic Treatment Plan

Status: **current staged direction for the 2013 370Z NISMO with Bose — updated 2026-09-23**

## Goal

Build for **clean sound first**, not maximum loudness: a strong front image, smooth vocals/highs, useful midbass, controlled bass and a serviceable install that preserves hatch space and can coexist with the future air-management system.

Current real-world observation after delivery:
- The car is home and has been driven 150+ miles.
- The **front speakers sound shot / weak** and are the obvious audio problem.
- The **factory Bose sub still sounds decent**.
- The correct move is therefore **front stage first, subwoofer later only if needed**.

## Phase 1 — head unit / integration

### ORDERED: Kenwood Excelon DMX809S

Official product page:
https://www.kenwood.com/usa/car/excelon/dmx809s/

Key reasons it stays:
- Wireless Apple CarPlay and Android Auto.
- 13-band EQ and digital time alignment.
- Three camera inputs.
- Three 5.0 V preouts.
- Short chassis.

**The radio and the required install / interface parts are now ordered.**

Initial signal path:
**DMX809S → verified Bose integration path → factory Bose amplifier / factory system**

The first install goal is simple: get the new radio working correctly without destroying a still-usable Bose system.

Rules:
- Verify steering-wheel-control behavior before closing the dash.
- Verify every speaker and the Bose sub after the radio install.
- Do not assume an aftermarket speaker can be connected directly to an unknown Bose-amplified output without checking the circuit.
- Preserve factory connectors where practical.

## Phase 2 — fix the front stage

### NEXT BUY: KICKER KS KSS650 component set

Model: **51KSS6504**

Official product page:
https://www.kicker.com/51KSS6504

Verified KICKER specifications:
- 6.5-inch component system.
- 4-ohm nominal impedance.
- 1-inch silk-dome tweeters.
- Recommended amplifier power: 15–125 W RMS.
- 35 Hz–21 kHz published frequency response.

Why it fits the project:
- The 2013 370Z front-door aftermarket fit class is 6.5-inch.
- Separate tweeters let us build a real front stage rather than simply replacing a full-range door speaker.
- Silk-dome tweeters match the stated preference for clean / smooth rather than harsh / loud.
- The woofer is shallow enough to be a practical fit candidate, but **final bracket / depth / window clearance is still verified on the actual door before permanent mounting**.

The older 6x9 idea is dropped.

### NEXT BUY: KICKER KEY200.4

Official product page:
https://shop.kicker.com/key-2004-4-channel-smart-amplifier

Verified KICKER specifications:
- 50 W × 4 at 4 ohms.
- Automatic 40-band EQ.
- Automatic time alignment.
- 60 / 80 / 120 Hz high-pass crossover options.
- Bi-amp capability.
- Compact chassis.

Why this amp:
- The goal is better front-stage control and imaging, not a giant power number.
- It gives us DSP functions without committing to a large separate DSP/amp rack.
- The future subwoofer receives its own mono amplifier; the KEY200.4 is not asked to power the sub.

### Front-stage install direction

- Treat the doors while they are apart.
- Make the speaker mounting surface rigid and sealed where practical.
- Use useful butyl damping on resonant sheet metal.
- Use foam / decoupling where trim contact points can buzz.
- Preserve drains, window movement, service openings and fasteners.
- Reuse healthy factory speaker-side runs where practical.
- Start with a safe high-pass point around 80 Hz and tune from there.
- Rear fill stays optional; do not spend money there until the front stage is installed and tuned.

### Passive vs bi-amp

The KSS650 includes passive crossover hardware and the KEY200.4 also supports bi-amping.

Default rule:
- **Do not overcomplicate the first install.**
- Start with the component system configured in a known-safe way.
- Use KEY bi-amp mode only if the final wiring / crossover plan is explicitly validated.
- Do not bypass the KICKER passive network and improvise active crossover points.

## Phase 3 — keep the Bose sub

### CURRENT DECISION: KEEP IT

The factory Bose sub is still doing a decent job in the car. That makes it a **keep**, not a problem to solve.

Sequence:
1. Install and verify the DMX809S.
2. Install the KSS650 front components.
3. Add / tune the KEY200.4.
4. Drive and listen to the completed front stage with the Bose sub still working.
5. Only spend money on bass if the Bose sub then becomes the weak link.

Important integration gate:
- When the KEY200.4 takes over the aftermarket front stage, the final wiring plan must intentionally preserve the factory Bose sub feed if we still want to use it.
- Do not cut out the Bose amplifier blindly and then discover the retained sub has no signal.
- Verify the exact factory Bose amp / sub routing in the car before finalizing the hybrid front-stage + Bose-sub wiring.

## Phase 4 — optional stealth single-10 upgrade

If the Bose bass eventually feels weak compared with the upgraded front stage, the new preferred direction is a **single stealth 10-inch corner system**, not the old dual-8 concept.

### Enclosure: Wicked C.A.S. 370Z Corner 1×10

Product:
https://shop.wickedcas.com/nissan-370z-corner-1x10-enclosure-sub-box-subwoofer-enclosure-stealth-look.html

Published enclosure data:
- Driver-side 370Z corner enclosure.
- Sealed.
- 0.7 ft³ internal volume.
- 5.9-inch mounting depth.
- Designed to preserve the useful hatch area.

This packaging direction fits the project better than a large generic rectangular box because it keeps the Z usable and visually clean.

### Preferred raw sub: KICKER CompRT 10

Model: **48CWRT104**

Official product page:
https://shop.kicker.com/comp-rt-10-4-ohm-subwoofer

Published KICKER data:
- 10-inch shallow sub.
- Dual 4-ohm voice coils.
- 400 W RMS recommended power.
- 3-7/16-inch mounting depth.
- Recommended sealed volume: 0.4–1.25 ft³.

The Wicked C.A.S. box's 0.7 ft³ sealed volume falls inside KICKER's published sealed range.

Wiring direction:
- Wire the dual 4-ohm coils in parallel.
- Final nominal load: **2 ohms**.
- Pair with a dedicated mono amplifier around **400–500 W RMS at 2 ohms**.
- Exact mono amp is deliberately not selected until we are actually buying the sub stage.

### Bass-system rule

When the aftermarket 10-inch system is installed:
- Retire / disconnect the factory Bose low-bass path rather than intentionally running two different sub systems over the same range.
- Tune one coherent subwoofer system.
- Use a protective grille.
- Rattle-test the hatch before final trim goes back in.

## Cameras

Current direction remains:
- Front camera.
- Rear camera.
- Hold the side camera until later.

The DMX809S supports three camera inputs, so the current front + rear plan does not require an external camera switcher.

## Wiring / electrical

For aftermarket amplification:
- Dedicated fused OFC power from the battery.
- Proper ground.
- Protect wiring from abrasion, heat and moving parts.
- Label major wiring and photograph routes before panels close.
- Size the eventual final power-distribution plan with **audio amplifier current + future air-compressor current** in mind.

For the KEY200.4 specifically, do not buy an oversized expensive amp kit merely because larger cable exists. Size the circuit to the actual amplifier / installation requirements while preserving a sensible future expansion plan.

## Sound treatment

### Doors
- Butyl damping on useful resonant areas.
- Rigid / sealed speaker mounting where practical.
- Foam / decoupling at trim-contact points.
- Preserve drains and service access.

### Hatch
- Treat broad resonant panels and actual rattle points.
- Do not bury fuses, amp controls, air-system drains, wiring junctions or service points.
- Add more material only where it solves a real resonance.

## Current shopping order

1. **DMX809S + install/interface parts — ORDERED**
2. **KICKER 51KSS6504 front components — NEXT**
3. **KICKER KEY200.4 — NEXT**
4. Door treatment / speaker mounting materials
5. Install and tune
6. Keep / reassess factory Bose sub
7. **Only if needed later:** Wicked C.A.S. 1×10 enclosure
8. **Only if needed later:** KICKER 48CWRT104
9. **Only if needed later:** ~400–500 W RMS @ 2Ω mono amplifier

## Decision summary

**The front is broken; the bass is not. Fix the front first.**

The locked current direction is:

**DMX809S ordered → KSS650 front components → KEY200.4 front-stage DSP amp → keep Bose sub → listen and tune → optional Wicked C.A.S. + CompRT 10 + mono amp later.**

The old JL C2/JD400/4 and dual-8 plan is retired from the current build direction.
