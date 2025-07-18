// استرجاع النقاط المحفوظة من التخزين المحلي أو البدء من 0
let userPoints = parseInt(localStorage.getItem("points")) || 0;

// تحديث عرض النقاط (اختياري للتكامل لاحقًا)
function updatePointsDisplay() {
  console.log("✅ عدد النقاط الحالي:", userPoints);
}

// دالة الشراء: تخصم النقاط عند شراء عنصر
function purchaseItem(cost) {
  if (userPoints >= cost) {
    userPoints -= cost;
    localStorage.setItem("points", userPoints);

    // تسجيل الشراء الرمزي (يمكن توسيعه لاحقًا)
    let purchases = localStorage.getItem("purchases") || "";
    purchases += " | عنصر بـ " + cost + " نقطة";
    localStorage.setItem("purchases", purchases);

    // تسجيل النشاط الأخير
    localStorage.setItem("lastActivity", "شراء عنصر بـ " + cost + " نقطة");

    alert("🎉 تم الشراء بنجاح! تبقى لديك " + userPoints + " نقطة.");
    updatePointsDisplay();
  } else {
    alert("⚠️ لا تملك نقاط كافية. تحتاج " + cost + " نقطة.");
  }
}

// دالة لإضافة نقاط (تستخدم عند الفوز أو لأغراض الاختبار)
function addPoints(amount) {
  userPoints += amount;
  localStorage.setItem("points", userPoints);
  alert("⭐ تمت إضافة " + amount + " نقطة! مجموعك الآن: " + userPoints);
  updatePointsDisplay();
}

// ربط أزرار الشراء عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  const costs = [100, 75, 150, 50]; // تكلفة كل عنصر في المتجر حسب الترتيب
  const buttons = document.querySelectorAll("button");

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      purchaseItem(costs[index]);
    });
  });
});