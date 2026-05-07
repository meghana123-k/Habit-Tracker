import { Button } from "./Button";

export function HabitForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <input
            type="text"
            id="title"
            // add remaining space to the right of the input
            className="flex-1 bg-zinc-800 border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            placeholder="New Habit..."
          />
          <Button text="Add Habit" />
        </div>
      </div>
    </form>
  );
}
