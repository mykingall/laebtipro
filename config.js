// 🔐 حفظ بيانات الدخول بعد تسجيل المستخدم
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = form.querySelector('input[type="text"]').value.trim();
      const userID = form.querySelector('input[type="number"]').value.trim();

      if (username) {
        localStorage.setItem("username", username);
        localStorage.setItem("userID", userID || "غير محدد");

        alert("✅ تم تسجيل الدخول باسم: " + username);
        window.location.href = "account.html"; // التوجيه لصفحة الحساب بعد الدخول
      } else {
        alert("⚠️ الرجاء إدخال الاسم للمتابعة.");
      }
    });
  }

  // 📦 عرض الاسم في صفحة الحساب إذا كان متوفر
  const nameDisplay = document.querySelector(".account-box li");
  if (nameDisplay) {
    const savedName = localStorage.getItem("username") || "زائر (غير مسجل)";
    nameDisplay.textContent = "الاسم: " + savedName;
  }
});