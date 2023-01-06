// ===================" Порівняння" ==========
const dayStart = "07:30";
const dayEnd = "17:45";

const convertInMinutes = (time) => {
  const [hours, minutes] = time.split(":");

  let totalMinutes = Number(hours) * 60 + Number(minutes);

  return totalMinutes;
};

function scheduleMeeting(startTime, durationMinutes) {
  // ..TODO..
  const startTimeInMinutes = convertInMinutes(startTime);
  const dayStartInMinutes = convertInMinutes(dayStart);
  const dayEndInMinutes = convertInMinutes(dayEnd);

  if (
    startTimeInMinutes >= dayStartInMinutes &&
    startTimeInMinutes + durationMinutes <= dayEndInMinutes
  ) {
    return true;
  }

  return false;
}

// console.log(scheduleMeeting("7:00", 15)); // false
// console.log(scheduleMeeting("07:15", 30)); // false
// console.log(scheduleMeeting("7:30", 30)); // true
// console.log(scheduleMeeting("11:30", 60)); // true
// console.log(scheduleMeeting("17:00", 45)); // true
// console.log(scheduleMeeting("17:30", 30)); // false
// console.log(scheduleMeeting("18:00", 15)); // false

// ============ "Замикання" ===========

function range(start, end) {
  // ..TODO..
  const numStart = start;

  if (end === undefined) {
    return function create(numEnd) {
      const res = [];
      if (numStart <= numEnd) {
        for (let i = numStart; i <= numEnd; i++) {
          res.push(i);
        }
      }
      return res;
    };
  } else {
    const res = [];
    if (start <= end) {
      for (let i = numStart; i <= end; i++) {
        res.push(i);
      }
    }
    return res;
  }
}

// console.log(range(3, 3)); // [3]
// console.log(range(3, 8)); // [3,4,5,6,7,8]
// console.log(range(3, 0)); // []

// var start3 = range(3);
// var start4 = range(4);

// console.log(start3(3)); // [3]
// console.log(start3(8)); // [3,4,5,6,7,8]
// console.log(start3(0)); // []

// console.log(start4(6)); // [4,5,6]

//============== "Вправа з використання прототипів" ===========

function randMax(max) {
  // debugger;
  return Math.trunc(1e9 * Math.random()) % max;
}

var reel = {
  symbols: ["♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

const createDisplayData = (reel) => {
  const pos = reel.position;
  let prevInd;
  let nextInd;

  if (pos === 0) {
    prevInd = reel.symbols.length - 1;
  } else {
    prevInd = pos - 1;
  }

  if (pos === reel.symbols.length - 1) {
    nextInd = 0;
  } else {
    nextInd = pos + 1;
  }

  const disp1 = [
    reel.symbols[prevInd],
    reel.symbols[pos],
    reel.symbols[nextInd],
  ];

  return disp1;
};

var slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],

  spin() {
    // debugger;
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    const displayData = [];
    for (const arr of this.reels) {
      displayData.push(createDisplayData(arr));
    }

    return displayData;
  },
};

slotMachine.spin();
console.table(slotMachine.display());
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

slotMachine.spin();
console.table(slotMachine.display());
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★
