

class Clock {
  static clockRomanMarks = [
    "XII",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI"
  ];

  static clockNumerMarks = [
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11"
  ];

  static getNow() {
    const now = new Date(Date.now());
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const display = now.toLocaleString();

    return {
      hour,
      minute,
      second,
      display
    };
  }
}

export default Clock;
