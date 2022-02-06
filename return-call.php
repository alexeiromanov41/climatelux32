<?php 
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $name = htmlspecialchars($name);
    $phone = htmlspecialchars($phone);

    $name = urldecode($name);
    $phone = urldecode($phone);

    $name = trim($name);
    $phone = trim($phone);

    if (mail("alexeiromanov41@gmail.com, alexeiromanov41@yandex.ru, 0032@ro.ru", "Обратный звонок", "Имя: ".$name."\r\nТелефон: ".$phone ,"From: 0032@ro.ru")) {
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
