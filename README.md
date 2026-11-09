# Don't Panic

[![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A514-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Status](https://img.shields.io/badge/status-not%20started-lightgrey)]()

A CodinGame puzzle about routing clones through the Improbability Drive: floors,
elevators, lasers and a single exit. The goal is to save **at least one clone**
before the round limit runs out.

> Puzzle statement belongs to CodinGame. This repository is a working space for the
> solution and its notes.

---

## Mechanics

The drive is a `width × nbFloors` grid. Floor `0` is the bottom one, position `0`
is the leftmost.

### Clones

- Spawn from a single generator on **floor 0**, every **3 game turns**, heading
  **right**.
- Move **one position per turn**, in a straight line, in their current direction.
- Are destroyed by the lasers if they leave `[0, width - 1]`.

### Elevators

- At most one elevator per floor.
- A clone stepping onto an elevator position moves **up one floor**, and that move
  costs a turn.
- Next turn it keeps the direction it had before going up.
- A blocked clone standing on an elevator disables it.

### Blocking

- Each turn you may either **BLOCK** the leading clone (the one that came out
  earliest and is still unblocked) or **WAIT**.
- A blocked clone can no longer be acted on; the next clone becomes the leader.
- A clone reverses direction when it:
  - walks into a blocked clone,
  - exits the generator directly onto a blocked clone,
  - comes up an elevator onto a blocked clone.

### Exit

- Reaching the exit position on `exitFloor` saves the clone: it disappears and the
  game is won.

### Turn input

```
cloneFloor clonePos direction
```

`direction` is `LEFT` or `RIGHT`. When no unblocked clone is out yet, the line is
`-1 -1 NONE` and the only sensible action is `WAIT`.

---

## Input / Output

**Initialization**

```
nbFloors width nbRounds exitFloor exitPos nbTotalClones nbAdditionalElevators nbElevators
elevatorFloor elevatorPos   × nbElevators
```

**Each turn**

```
cloneFloor clonePos direction
```

**Output**

```
WAIT
```

or

```
BLOCK
```

**Constraints:** `1 ≤ nbFloors ≤ 15`, `5 ≤ width ≤ 100`, `10 ≤ nbRounds ≤ 200`,
`2 ≤ nbTotalClones ≤ 50`, `0 ≤ nbElevators ≤ 100`, 100 ms per turn.

---

## Plan

- [ ] parse the initialization and store the elevators per floor
- [ ] follow the leading clone's state turn by turn
- [ ] decide when a clone must be blocked (wrong way, missing elevator, overshoot)
- [ ] verify on the provided tests: U Turn, One floor, U Turn lower floor, Several floors
- [ ] shorten the code once it passes

---

## Author

**Abdelhakim Baalla**

- GitHub: [https://github.com/Abdelhakim-Baalla](https://github.com/Abdelhakim-Baalla)

## License

Released under the [MIT License](./LICENSE).
