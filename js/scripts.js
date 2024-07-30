document.addEventListener('DOMContentLoaded', function() {
    // Обработка отправки формы
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Собираем данные формы
        var name = document.getElementById('nameInput').value;
        var phone = document.getElementById('phoneInput').value;
        var email = document.getElementById('emailInput').value;

        // Данные для отправки
        var formData = {
            name: name,
            phone: phone,
            email: email
        };

        // Отправка данных на сервер через API
        fetch('http://localhost:3000/send-email', { // URL вашего локального сервера
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // Обработка ответа сервера
            alert('Форма успешно отправлена!');
            document.getElementById('contactForm').reset();
            var orderModal = bootstrap.Modal.getInstance(document.getElementById('orderModal'));
            orderModal.hide();
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке формы.');
        });
    });

    // Остановка видео при закрытии модального окна
    var myModal = document.getElementById('myModal');
    var video = document.getElementById('dolphinVideo');

    myModal.addEventListener('hidden.bs.modal', function () {
        video.pause();
        video.currentTime = 0;
    });
});