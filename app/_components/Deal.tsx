export default function Deal() {
  return (
    <section className="bg-blue-600 text-white py-12 text-center">
      <h2 className="text-2xl font-bold mb-2">🔥 Deal of the Day</h2>

      <p className="mb-4">
        Bluetooth Speaker — <span className="line-through">$59</span>{" "}
        <span className="font-bold text-xl">$39</span>
      </p>

      <button className="bg-white text-black px-6 py-2 rounded-xl">
        Get It Now
      </button>
    </section>
  );
}
