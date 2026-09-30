# Forever Z — Current State

Last structured update: **2026-09-29**

## Status

**2013 Pearl White 370Z NISMO 6MT is purchased, delivered, home in Missouri and actively being driven.**

Current phase: **diagnose CEL → establish 144k baseline → fix front audio → inspect/tighten chassis → add longevity upgrades only where evidence supports them.**

## Real-world behavior

- Odometer: about 144k miles.
- Highway cruising is good.
- No steering-wheel vibration noticed at highway speed.
- Normal roads can feel rough / semi-jarring.
- Some feedback is felt under harder braking.
- Oil temperature observed around 220°F during normal driving.
- Front speakers sound shot/weak.
- Factory Bose sub still sounds decent.

## Latest known service

CARFAX documents **2026-09-11 at 144,009 miles**:
- valve-cover gasket(s) replaced,
- safety inspection,
- wash/detail.

Treat the valve-cover work as fresh. Inspect for re-seep after heat cycles; do not repeat a newly documented repair without evidence.

CARFAX also highlights **2026-05-22 at 140,777 miles**:
- maintenance inspection,
- oil/filter changed.

## Engine-history audit — corrected Sep 28

The earlier 97,797-mile “spark plug(s) / ignition coil(s) replaced” item was traced to a different **2009 370Z candidate CARFAX**, not our NISMO.

For VIN **JN1AZ4EH8DM382151**, the records currently available contain:
- **no documented spark-plug replacement,**
- **no documented ignition-coil replacement.**

Plan consequence:
- put six correct NISMO/VQ37VHR plugs on the baseline list now,
- inspect coils/boots/connectors and plug wells while open,
- do not shotgun six coils without misfire/physical evidence,
- verify the fresh valve-cover job left the plug wells dry.

Full project page: **engine-history.html**.

## Clutch / CSC history — Sep 28

CARFAX for VIN **JN1AZ4EH8DM382151** documents:
- **01/16/2018 at 56,535 miles — clutch slave cylinder replaced.**
- No clutch-disc, pressure-plate, flywheel or clutch-master-cylinder replacement is documented in the available report.

At roughly 144k miles, the replacement CSC has about **87k miles** on it.

Current owner impression: the clutch still seems to bite well. This week is inspection/data-gathering, not automatic replacement:
- note cold/hot bite point and pedal return,
- watch for RPM flare / slip,
- check 1st and reverse engagement hot,
- inspect clutch fluid, master area, hydraulic line and bellhousing for leakage,
- note pedal-up versus pedal-down noise.

If transmission removal becomes necessary, inspect the whole friction package while it is accessible and consider an external-slave / CSC-delete conversion for future serviceability.

## Active CEL / catalyst issue — Sep 29

Standalone ANCEL export now confirms:
- **P0420 — Catalyst System Efficiency Below Threshold, Bank 1**,
- **P0430 — Catalyst System Efficiency Below Threshold, Bank 2**,
- P0420 also appeared by itself on another scan.

Comers' current finding:
- one side is flowing better than the **driver side**,
- no obvious major problem was found,
- shop suggested running Sea Foam through it,
- CEL was not cleared.

Paperwork reality:
- the car came with the owner manual and **zero maintenance receipts/papers**,
- CARFAX/database entries are the only inherited service evidence currently available.

Working repair order:
1. Save the ANCEL report, Mode $06 screens, freeze frame and readiness evidence.
2. Replace all six correct spark plugs; no plug service is documented for this VIN.
3. Inspect plug wells, coil boots/connectors and coils while open; do not shotgun six coils.
4. Check misfire data, fuel trims, intake/exhaust leaks and both-bank sensor behavior.
5. After baseline work, clear the DTCs **once**, run a normal drive cycle and record what returns.
6. If P0420/P0430 return with the engine side clean, move to **Fast Intentions Resonated High Flow Cats** with fresh gaskets/hardware.
7. Rescan after repair and complete readiness monitors.

Temporary driving rule:
- steady CEL + smooth running + normal power/temperature = gentle short-term driving is reasonable while diagnosis is completed,
- avoid repeated hard pulls/high load,
- stop/reassess for a flashing CEL, active misfire, major power loss, abnormal heat, converter rattle/glow, or strong sulfur/rotten-egg odor.

Clearing the code is allowed after evidence is saved, but repeated clearing is not the plan because it resets readiness and erases useful diagnostic pattern data.

## Scanner direction

The **standalone handheld ANCEL OBD-II scanner** is now purchased and in use; no phone/app dependency.

Already captured:
- P0420/P0430 export.

Still useful to capture:
- stored/pending/permanent codes,
- freeze frame,
- readiness monitors,
- useful live data,
- bank comparison for fuel trims/O2 behavior and available misfire information.


## Cheap maintenance plan

### ~$25
- Cabin air filter.

### ~$50 cumulative target
- Two quality engine air filters.
- Cabin filter.
- MAF-specific cleaner only if needed during inspection.

### ~$100 cumulative target
- Accessory/serpentine belt if age is unknown or condition is not excellent.
- Engine air filters.
- Cabin filter.
- Inspect tensioner/idlers while open.

### Ignition baseline
- Six correct spark plugs: **plan to do now** because no replacement is documented for our VIN.
- Inspect all six coils; replace only with evidence.
- Inspect plug wells for oil after the fresh valve-cover-gasket service.

### Next bucket
- PCV valves/hoses by condition.

Nissan's 2013 maintenance guide specifies **60,000 miles / 48 months** for NISMO spark plugs.

## Fluids / clock reset

Verify before replacing, then establish a known baseline as needed:
- manual-transmission fluid,
- differential fluid,
- coolant age/history,
- power-steering fluid condition/history,
- NISMO brake fluid,
- clutch hydraulic fluid.

The 2013 NISMO factory-fill brake fluid is **Genuine Nissan R35 Special II**. The clutch reservoir has its own factory fluid requirement; do not treat the two circuits as the same shopping item.

## Inherited service clocks from CARFAX — Sep 28

Bumper-to-bumper audit added to **history.html**.

Important last-documented items:
- front/rear brake pads: **55,665 mi (2017)**,
- clutch slave cylinder: **56,535 mi (2018)**,
- brake fluid: **73,527 mi (2019)**,
- differential fluid/service: **73,527 mi (2019)**,
- power-steering fluid: **73,527 mi (2019)**,
- battery: **73,527 mi (2019)**,
- engine + cabin filters: **73,527 mi (2019)**,
- four tires + alignment: **89,649 mi (2021)**,
- oil/filter: **140,777 mi (May 2026)**,
- valve-cover gasket(s): **144,009 mi (Sep 2026)**.

No service is documented for:
- 6MT fluid,
- coolant change,
- spark plugs/coils,
- drive belt/tensioner/idlers,
- suspension/hubs,
- catalytic converters/O2/A/F sensors.

The 2018 CARFAX damage event specifically identifies **minor front + undercarriage damage**. The 2023 event is also minor but the available copy does not expose a useful location.

Plan consequence: verify current parts/receipts first, then reset the old/unknown clocks instead of assuming everything is original.

## Audio — current exact status

### Confirmed ordered
- Kenwood Excelon DMX809S.
- Required radio/install/interface parts.
- KICKER **51KSS6504** 6.5-inch front component set — ordered/inbound.

### Selected, not yet marked purchased
- **NVX NDA11005** 5-channel amplifier.
- **NVX XKIT46** complete OFC 4-gauge wiring kit.

### Treatment
- ~36 sq ft 80-mil butyl for both doors + spare well,
- 1/8-inch closed-cell foam,
- deadening roller,
- Tesa 51608 fleece tape,
- no MLV yet.

### Bass
Keep the factory Bose sub temporarily. Do not spend on the future single-10 stage until the new front stage is installed and tuned.

## Tires

Current daily-driver plan:
- Continental ExtremeContact DWS06 Plus
- 245/40ZR19 front
- 285/35ZR19 rear
- factory NISMO 19-inch wheels

Do chassis/steering repairs first, then mount/balance and align.

## Chassis next step

Run a wheels-off **chassis health day**:
- cold tire pressure / wear,
- dampers, bump stops and mounts,
- control-arm bushings,
- ball joints,
- tie rods / steering play,
- sway links/bushings,
- rear links/bushings,
- rear differential bushing,
- hubs/wheel bearings,
- brake pads/rotors/calipers/hoses.

Replace confirmed wear, not mileage.

## Cooling / longevity

220°F observed oil temperature remains a data point, not an emergency by itself.

Later, after baseline:
- OEM-looking oil-pressure gauge,
- thermostatic 25-row oil cooler,
- cooling-system refresh by actual condition,
- retain a healthy factory radiator/fans/exchanger.

## Air suspension

Long-term direction:
- street/highway usable,
- raise for obstacles,
- air out for shows,
- stealth under-hatch management,
- serviceable false floor,
- rubber-isolated compressor mounting,
- preserve cargo space,
- vehicle-specific divorced rear layout unless a specialist gives a compelling reason otherwise.

Do not use air suspension to mask worn chassis parts.
