<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TW First-bit</title>
    <link rel="stylesheet" href="assets/css/uikit.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <section>
        <div class="container">
            <div class="title">
                <h3>Онлайн конфигуратор</h3>
            </div>
            <h1>Задайте параметры стекла</h1>
            <hr>
            <form action="" class="uk-flex uk-position-relative">
                <div class="uk-flex uk-flex-column">
                    <label for="length">Укажите длину</label>
                    <input type="number" name="length" id="length" placeholder="Длина | мм">
                </div>
                <div class="empty_input">
                    <img src="/img/attention.png" alt="">
                    <p>Укажите размеры</p>
                </div>
                <div class="uk-flex uk-flex-column">
                    <label for="width">Укажите ширину</label>
                    <input type="number" name="width" id="width" placeholder="Ширина | мм">
                </div>
                <div class="uk-flex uk-flex-column uk-position-relative">
                    <div class="tooltip uk-position-absolute uk-flex uk-flex-column ch_hidden">
                        <h4>При выборе формы круг или овал:</h4>
                        <ul>
                            <li>Длина и Ширина у круглой формы совпадают</li>
                            <li>Длина и Ширина у овальной формы различаются</li>
                        </ul>
                    </div>
                    <label for="shape">Форма стекла
                        <span>?</span>
                    </label>
                    <select name="shape" id="shape">
                        <option value="Прямоугольник">
                            Прямоугольник
                        </option>
                        <option value="Круг">
                            Круг (овал)
                        </option>
                    </select>
                </div>
                <div class="uk-flex uk-flex-column uk-position-relative">
                    <div class="tooltip uk-position-absolute uk-flex uk-flex-column ch_hidden" style="width:290px">
                        <h4>При выборе метода обработки кромки:</h4>
                        <ul>
                            <li><b>Без обработки</b> - голый рез, можно порезать руки</li>
                            <li><b>Шлифофка</b> - сняты фаски, матовый торец стекла</li>
                            <li><b>Полировка</b> - сняты фаски, глянцевый торец стекла</li>
                        </ul>
                        <a>Подробнее об услуге</a>
                    </div>
                    <label for="type_processing">Вид обработки
                        <span>?</span>
                    </label>
                    <select name="type_processing" id="type_processing">
                        <option value="Без обработки">
                            Без обработки
                        </option>
                        <option value="С шлифофкой">
                        С шлифофкой
                        </option>
                        <option value="С полировкой">
                            С полировкой
                        </option>
                    </select>
                </div>
                <div class="uk-flex uk-flex-column">
                    <label for="quantity">Количество</label>
                    <div class="input_quantity">
                        <button id="minus">-</button>
                        <input type="number"
                            name="quantity"
                            id="quantity"
                            value="0"
                            maxlength="2" >
                        <button id="plus">+</button>
                    </div>
                </div>
                <div class="uk-flex uk-flex-column">
                    <label for="quantity">Сумма</label>
                    <div class="sum">
                        <p>0 ₽</p>
                        <img src='/img/cross.svg' width="15px" color='#617189'>
                    </div>
                </div>
            </form>
        </div>
    </section>

    <script src="/assets/js/jquery.js"></script>
    <script src="/assets/js/scripts.js"></script>
</body>
</html>