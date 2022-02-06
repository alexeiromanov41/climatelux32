<?php 
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $phone = $_POST['phone'];
    $msg = $_POST['msg'];

    $name = htmlspecialchars($name);
    $mail = htmlspecialchars($mail);
    $phone = htmlspecialchars($phone);
    $msg = htmlspecialchars($msg);

    $name = urldecode($name);
    $mail = urldecode($mail);
    $phone = urldecode($phone);
    $msg = urldecode($msg);

    $name = trim($name);
    $mail = trim($mail);
    $phone = trim($phone);
    $msg = trim($msg);

    if (mail("alexeiromanov41@gmail.com, alexeiromanov41@yandex.ru, 0032@ro.ru", "Обратная связь", "Имя: ".$name."\r\nemail: ".$mail."\r\nТелефон: ".$phone."\r\nСообщение: ".$msg,"From: 0032@ro.ru")) {
        // echo "сообщение успешно отправлено";
        // $redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'form_ok.html';
        $redirect = isset($_SERVER['HTTP_REFERER'])? 'form_ok.html':$_SERVER['HTTP_REFERER'];
        header("Location: $redirect");
        exit();
    } 
        else {
            // echo "при отправке сообщения возникли ошибки";
            $redirect = isset($_SERVER['HTTP_REFERER'])? 'form_fail.html':$_SERVER['HTTP_REFERER'];
            header("Location: $redirect");
            exit();
        }
?>
