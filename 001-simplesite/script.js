document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const messageDiv = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // 入力値取得
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      // バリデーション
      if (!name || !email || !message) {
        messageDiv.textContent = '全ての項目を入力してください。';
        messageDiv.style.color = '#d32f2f';
        return;
      }

      // メール形式チェック
      if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(email)) {
        messageDiv.textContent = '正しいメールアドレスを入力してください。';
        messageDiv.style.color = '#d32f2f';
        return;
      }

      // 送信完了メッセージ
      messageDiv.textContent = 'お問い合わせを送信しました。ありがとうございました！';
      messageDiv.style.color = '#005bac';

      // フォームリセット
      form.reset();
    });
  }
});