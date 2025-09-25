export default function Blog() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold text-pink-800 mb-6 text-center">
        المدونة 📝💡
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        هنا نشارككم آخر المقالات والنصائح حول الاشتراكات الرقمية 🎬📱، 
        وكيفية الاستفادة منها بأفضل طريقة. تابعونا دائماً عشان توصلكم كل
        التحديثات الجديدة ✨.
      </p>

      <div className="space-y-6">
        {/* المقالة الأولى */}
        <div className="bg-pink-50 p-4 rounded-2xl shadow">
          <h2 className="text-2xl font-bold text-pink-700 mb-2">
            🎬 ليه الاشتراكات الرقمية أفضل من شراء الأفلام؟
          </h2>
          <p className="text-gray-700 leading-relaxed">
            لأنك تقدر تستمتع بمكتبة ضخمة من الأفلام والمسلسلات مقابل سعر
            شهري بسيط 💕. هذا يوفر لك المال والوقت بدل ما تدفع لكل فيلم
            لوحده.
          </p>
        </div>

        {/* المقالة الثانية */}
        <div className="bg-pink-50 p-4 rounded-2xl shadow">
          <h2 className="text-2xl font-bold text-pink-700 mb-2">
            📱 كيف تختار الباقة المناسبة لك؟
          </h2>
          <p className="text-gray-700 leading-relaxed">
            إذا كنت تحب الأفلام فقط 🎥 خذ الباقة الأساسية، أما لو تحب
            المباريات والألعاب الرياضية ⚽️ خذ الباقة الشاملة اللي فيها كل
            شيء. دائماً فكر في احتياجاتك أولاً.
          </p>
        </div>

        {/* المقالة الثالثة */}
        <div className="bg-pink-50 p-4 rounded-2xl shadow">
          <h2 className="text-2xl font-bold text-pink-700 mb-2">
            💡 نصائح لتوفير أكثر
          </h2>
          <p className="text-gray-700 leading-relaxed">
            جرب الباقات السنوية ✨ لأنها أوفر من الشهرية على المدى الطويل.
            كمان تقدر تشارك الاشتراك مع العائلة أو الأصدقاء 👨‍👩‍👧‍👦.
          </p>
        </div>
      </div>
    </div>
  );
}
