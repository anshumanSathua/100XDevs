/**
 * Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

HH:MM::SS (Eg. 13:45:23)

HH:MM::SS AM/PM (Eg 01:45:23 PM)
 */

const displayClock = (): void => {
  const format24HourTime = (date: Date): string => {
    const hours: string = String(date.getHours()).padStart(2, "0");
    const minutes: string = String(date.getMinutes()).padStart(2, "0");
    const seconds: string = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const format12HourTime = (date: Date): string => {
    let hours: number = date.getHours();
    const minutes: string = String(date.getMinutes()).padStart(2, "0");
    const seconds: string = String(date.getSeconds()).padStart(2, "0");
    const ampm: string = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedHours: string = String(hours).padStart(2, "0");

    return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
  };

  setInterval(() => {
    const currentTime: Date = new Date();

    const time24Hour: string = format24HourTime(currentTime);
    const time12Hour: string = format12HourTime(currentTime);

    process.stdout.write(
      `\r24-Hour Format: ${time24Hour} | 12-Hour Format: ${time12Hour}`
    );
  }, 1000);
};

displayClock();
