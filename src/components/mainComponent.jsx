import React, { useState } from "react";
import Questionnaire from "./questtionare";
import logoFB from "./images/logo-facebook.svg";
import logoIG from "./images/logo-instagram.svg";
import logoTw from "./images/logo-twitter.svg";
import village from "./images/image 3.png";
import villa from "./images/Rectangle 21.png";
import voloshina from "./images/Voloshina.png";
import verina from "./images/Verina.png";
import sushkov from "./images/Sushkov.png";

function MainComponent() {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const togglePhoneNumber = () => {
    setShowPhoneNumber(!showPhoneNumber);
  };

  const facebookUrl = "https://www.facebook.com";
  const instagramUrl = "https://www.instagram.com";
  const twitterUrl = "hrrps://www.twitter.com";

  //перемещение в подбор квартиры
  const scrollToSection2 = () => {
    const section2 = document.getElementById("section2");
    if (section2) {
      section2.scrollIntoView({ behavior: "smooth" }); // Плавная прокрутка
    }
  };

  //открыватель текста
  const [expanded, setExpanded] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <div className="logo">HOLYHOME</div>
          <div className="logo-list">
            <a className="logo-list-item" href="*">
              МАГАЗИН
            </a>
            <a className="logo-list-item" href="*">
              КАТАЛОГ
            </a>
          </div>
          <button className="header__btn">
            Связаться с нами <img src="/images/Vector 1.png" alt="arrow" />
          </button>
        </nav>
      </header>
      <div className="intro">
        <div className="logos">
          <a href={facebookUrl}>
            <img src={logoFB} alt="logoFB" />
          </a>
          <a href={instagramUrl}>
            <img src={logoIG} alt="logoIG" />
          </a>
          <a href={twitterUrl}>
            <img src={logoTw} alt="logoTw" />
          </a>
        </div>
        <div>
          <p className="openHorizn">
            Откройте новые горизонты с{" "}
            <span className="openHoriznPart">нашей недвижимостью!</span>
          </p>
          <div className="text-and-btn">
            <p className="estateChoose">
              на выбор более 40 объектов недвижимостью от застройщиков с удобной
              инфраструктурой
            </p>
            <button onClick={scrollToSection2} className="aptChoose-btn">
              Подобрать квартиру
            </button>
          </div>
        </div>
      </div>
      <div className="whyWe-container">
        <div className="imgVillage">
          <img src={village} alt="image3" />
        </div>
        <div className="whyWeText">
          <div className="whyWe">ПОЧЕМУ МЫ “HOLYHOME”</div>
          <p className="individual">
            выделяемся среди остальных агентств недвижимости
          </p>
          <div className="item-container">
            <p className="whyWeText-itemBig">Представительства</p>
            <p className="whyWeText-itemSmall">
              в 4 странах Мира- (Беларусь, Франция, Бельгия, Дубаи).
            </p>
            <img
              className="arrow-in-whyWe"
              src="/images/Vector 1.png"
              alt="arrow"
            />
            <div className="whiteLine"></div>
          </div>
          <div className="item-container">
            <p className="whyWeText-itemBig">Сопровождаем вас</p>
            <p className="whyWeText-itemSmall">
              при оформлении сделки на любом удобном для клиента иностранном
              языке
            </p>
            <img
              className="arrow-in-whyWe"
              src="/images/Vector 1.png"
              alt="arrow"
            />
            <div className="whiteLine"></div>
          </div>
          <div className="item-container">
            <p className="whyWeText-itemBig">Команда профессионалов</p>
            <p className="whyWeText-itemSmall">
              Наши агенты имеют многолетний опыт работы в недвижимости и
              проходят регулярные курсы повышения квалификации.
            </p>
            <img
              className="arrow-in-whyWe"
              src="/images/Vector 1.png"
              alt="arrow"
            />
            <div className="whiteLine"></div>
          </div>
          <div className="item-container">
            <p className="whyWeText-itemBig">Индивидуальный подход</p>
            <p className="whyWeText-itemSmall">
              Мы не просто продаем недвижимость, мы помогаем вам сделать
              правильный выбор и сэкономить время и деньги.
            </p>
            <img
              className="arrow-in-whyWe"
              src="/images/Vector 1.png"
              alt="arrow"
            />
            <div className="whiteLine"></div>
          </div>
          <div className="item-container">
            <p className="whyWeText-itemBig">Обратившись в наше агенство</p>
            <p className="whyWeText-itemSmall">
              вы станете обладателем абсолютно новой недвижимости
            </p>
            <img
              className="arrow-in-whyWe"
              src="/images/Vector 1.png"
              alt="arrow"
            />
            <div className="whiteLine"></div>
          </div>
          <div className="item-container">
            <p className="whyWeText-itemBig">Контролируем каждый этап</p>
            <p className="whyWeText-itemSmall">
              все этапы сделки прописываем в договоре
            </p>
            <img
              className="arrow-in-whyWe"
              src="/images/Vector 1.png"
              alt="arrow"
            />
            <div className="whiteLine"></div>
          </div>
          <button className="aptChoose-btn long-button">
            Подобрать квартиру
          </button>
        </div>
      </div>
      <div id="section2" className="questions">
        <p className="whyWe quests">ПРОЙДИТЕ ОПРОС</p>
        <p className="individual short quests">
          чтобы мы смогли подобрать лучшие варианты для вас
        </p>
        <Questionnaire />
      </div>
      <div className="mortgage">
        <p className="whyWe quests">ИПОТЕКА, РАССРОЧКА</p>
        <p className="individual short quests">выгодные предложения</p>
        <div className="mort-text-img">
          <div className="mort-text">
            <p className="whyWeText-itemBig">ИПОТЕКА ОТ 11 % ГОДОВЫХ</p>
            <p className="whyWeText-itemSmall">
              откроем дистанционно по 2 документам
            </p>
            <div className="whiteLine shortLine"></div>
            <p className="whyWeText-itemSmall">решение на 1 день</p>
            <div className="whiteLine shortLine"></div>
            <p className="whyWeText-itemSmall">
              95 % одобряемость заявок по нашей партнерской заявке
            </p>
            <div className="whiteLine shortLine"></div>
            <p className="whyWeText-itemBig">РАССРОЧКА ДО ГОДА ПОД 0 %</p>
            <p className="whyWeText-itemSmall">
              для нас индивидуальные условия от многих застройщиков
            </p>
            <div className="whiteLine shortLine"></div>
            <p className="whyWeText-itemSmall">
              можем договориться даже там, где нет рассрочки
            </p>
            <div className="whiteLine shortLine"></div>
          </div>
          <div className="villa-img">
            <img src={villa} alt="villa" />
          </div>
        </div>
      </div>
      <div className="team">
        <p className="whyWe quests">НАША КОМАНДА</p>
        <p className="whyWeText-itemBig quests grey">
          с нами работают настоящие профессионалы
        </p>
        <div className="team-worker">
          <img src={voloshina} alt="voloshina" />
          <div className="woker-description">
            <p className="whyWeText-itemBig">Ксения Волошина - Риэлтор</p>
            <p className={`whyWeText-itemSmall ${expanded ? "expanded" : ""}`}>
              Мы знаем рынок недвижимости. Наша команда следит за изменениями на
              рынке недвижимости и имеет доступ к последней информации о ценах и
              трендах в данной области. Мы можем помочь вам определиться с ценой
              и выбрать наиболее подходящий объект.
            </p>
            <button className="toggle-button" onClick={toggleText}>
              <img src="/images/Vector 1.svg" alt="arrow-dowm" />
            </button>
          </div>
        </div>
        <div className="team-worker">
          <img src={verina} alt="verina" />
          <div className="woker-description">
            <p className="whyWeText-itemBig">Светлана Верина - Секретарь</p>
            <p className={`whyWeText-itemSmall ${expanded ? "expanded" : ""}`}>
              Мы предлагаем индивидуальный подход. Мы понимаем, что каждый
              клиент уникален, поэтому мы предлагаем индивидуальный подход к
              каждому клиенту и настраиваемся на удовлетворение его
              потребностей.
            </p>
            <button className="toggle-button" onClick={toggleText}>
              <img src="/images/Vector 1.svg" alt="arrow-dowm" />
            </button>
          </div>
        </div>
        <div className="team-worker">
          <img src={sushkov} alt="sushkov" />
          <div className="woker-description">
            <p className="whyWeText-itemBig">
              Антон Сушков - Менеджер по продажам
            </p>
            <p className={`whyWeText-itemSmall ${expanded ? "expanded" : ""}`}>
              Мы понимаем, что покупка или продажа дома - это важный момент в
              жизни наших клиентов, и мы стремимся сделать этот процесс
              безопасным и прозрачным для них. Мы обладаем глубокими знаниями в
              области недвижимости и всегда готовы поделиться своими знаниями с
              клиентами. Это позволяет нашим клиентам принимать взвешенные
              решения при покупке или продаже дома.
            </p>
            <button className="toggle-button" onClick={toggleText}>
              <img src="/images/Vector 1.svg" alt="arrow-dowm" />
            </button>
          </div>
        </div>
      </div>
      <div className="how-we-work">
        <p className="whyWe quests fontSize32">КАК МЫ РАБОТАЕМ</p>
        <p className="whyWeText-itemBig quests grey">
          Чтобы мы смогли подобрать лучшие для Вас варианты
        </p>
        <ul className="custom-list">
          <li className="custom-list-item">
            <p className="whyWeText-itemBig">
              Оценка рыночной стоимости недвижимости
            </p>
            <p className="whyWeText-itemSmall">
              Подготовка объекта к продаже или аренде
            </p>
          </li>
          <li className="custom-list-item">
            <p className="whyWeText-itemBig">
              Разработка рекламной кампании для объекта
            </p>
            <p className="whyWeText-itemSmall">
              Проведение просмотров потенциальными клиентами
            </p>
          </li>
          <li className="custom-list-item">
            <p className="whyWeText-itemBig">
              Подписание договора купли-продажи или аренды
            </p>
            <p className="whyWeText-itemSmall">
              Проведение сделки на нотариальном уровне
            </p>
          </li>
          <li className="custom-list-item">
            <p className="whyWeText-itemBig">
              Послепродажное обслуживание клиента
            </p>
            <p className="whyWeText-itemSmall">
              Обеспечение безопасности и конфиденциальности сделки
            </p>
          </li>
          <li className="custom-list-item">
            <p className="whyWeText-itemBig">
              Учет и хранение документов по сделке
            </p>
            <p className="whyWeText-itemSmall">
              Предоставление консультаций и помощь в решении вопросов, связанных
              с недвижимостью
            </p>
          </li>
          <li className="custom-list-item">
            <p className="whyWeText-itemBig">Юридическое сопровождение</p>
            <p className="whyWeText-itemSmall">
              Хорошее агентство недвижимости предоставляет услуги юридического
              сопровождения сделки бесплатно
            </p>
          </li>
          <li className="custom-list-item">
            <p className="whyWeText-itemBig">Просмотр объекта недвижимости</p>
            <p className="whyWeText-itemSmall">
              Это позволяет клиенту оценить объект недвижимости вживую и принять
              решение о его покупке или аренде
            </p>
          </li>
        </ul>
      </div>
      <div className="our-company">
        <div className="our-company-intro">
          <p className="whyWe fontSize32">О КОМПАНИИ</p>
          <p className="our-comp-text-small">
            компания “HOLYHOME” современный брокер на рынке недвижимости России
          </p>
        </div>
        <p className="our-comp-list">
          Компания сегодня работает и развивается в таких городах как:
        </p>
        <ul className="our-comp-list">
          <li className="our-comp-list-item">Санкт-Петербург</li>
          <li className="our-comp-list-item">Москва</li>
          <li className="our-comp-list-item">Краснодар</li>
          <li className="our-comp-list-item">Сочи</li>
          <li className="our-comp-list-item">Баку</li>
        </ul>
        <p className="our-comp-text-p">
          Основная цель команий агентств недвижимости -{" "}
          <span style={{ color: "gray" }}>
            предоставить своим клиентам качественный сервис, позволяющий найти
            наиболее подходящий вариант недвижимости по их требованиям и
            бюджету. Это может включать в себя различные услуги, такие как
            предложение объектов недвижимости, проведение показов, организация
            переговоров и заключение сделок.
          </span>
        </p>
        <p className="our-comp-text-p">
          Нашими партнерами{" "}
          <span style={{ color: "gray" }}>
            являются лидирующие делевоперы и банки. Мы используем самые
            современные технологии в привлечении и в работе с клиентами.
            Компания быстро развивается и добивается хороших результатов.
            Основной сегмент, в котором мы оказываем услуги по продаже и сдачу в
            аренду недвижимости
          </span>
        </p>
      </div>
      <div className="consultation">
        <p className="whyWe fontSize32">
          ЗАПИШИТЕСЬ НА БЕСПЛТАНУЮ КОНСУЛЬТАЦИЮ
        </p>
        <p className="our-comp-text-small">
          дадим рекомендации по покупке, продаже или аренде недвижимости
        </p>
        <div className="consult-btns">
          <button
            className="header__btn wTxt btn-width-630px"
            onClick={togglePhoneNumber}
          >
            {showPhoneNumber ? "+7-123-456-78-90" : "Номер телефона"}{" "}
            <img src="/images/call-outline.svg" alt="call" />
          </button>
          <button className="aptChoose-btn btn-width-630px">
            Получить консультацию
          </button>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-logos-texts">
          <div className="footer-texts">
            <div className="footer-logo">HOLLYHOME</div>
            <div className="footer-shop-catalog">
              <p>МАГАЗИН</p>
              <p>КАТАЛОГ</p>
            </div>
          </div>
          <div className="footer-FB-IG-Tw">
            <img src="/images/black-logo-facebook.svg" alt="fdb" />
            <img src="/images/black-logo-instagram.svg" alt="IG" />
            <img src="/images/black-logo-twitter.svg" alt="Tw" />
          </div>
        </div>
        <div className="footer-btns">
          <button className="aptChoose-btn">
            Связаться с нами <img src="/images/arrow black.svg" alt="arrow" />
          </button>
          <button className="aptChoose-btn black-btn">
            Подобрать квартиру
          </button>
          <button className="aptChoose-btn" onClick={togglePhoneNumber}>
            {showPhoneNumber ? "+7-123-456-78-90" : "Номер телефона"}{" "}
            <img src="/images/call-outline (black).svg" alt="call" />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;
