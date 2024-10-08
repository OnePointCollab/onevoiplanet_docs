---
sidebar_position: 1
---

# Інтеграція з SalesDrive

**SalesDrive** - українська CRM-система для інтернет-магазинів, заснована 2012 року.

SalesDrive автоматизує обробку замовлень, створення та відстеження статусів ТТН, облік складу. SalesDrive фіксує комунікації з клієнтом (дзвінки, SMS, месенджери, email) і допомагає контролювати роботу менеджерів.

### Можливості інтеграції
- Журнал дзвінків (всі вхідні та вихідні дзвінки у картці заявці).
- Прослуховування аудіозапису дзвінка у CRM.
- Відстеження пропущених викликів.
- Дзвінок в 1 клік з картки заявки.

### Налаштування інтеграції з CRM SalesDrive
Для налаштування інтеграції SalesDrive з OneVOIPlanet, необхідно:

1. Натисніть **Інтеграції**.

![](../img/integrations-crm/1integrations.svg)

2. Перейдіть до **SalesDrive**.

![](../img/integrations-crm/2salesdrive.svg)

3. Активуйте інтеграцію.

![](../img/integrations-crm/3active.svg)

4. В полі **Домен**, введіть лінк сформований у кабінеті SalesDrive. (Наприклад: `https://onevoiplanet.salesdrive.me`).

![](../img/integrations-crm/salesDriveDomen.svg)

5. В полі **API Ключ** потрібно ввести згенерований ключ (токен), який дозволяє ідентифікувати SalesDrive обліковий запис.
[Як згенерувати API Ключ?](integration-sales-drive#як-згенерувати-api-ключ)

![](../img/integrations-crm/5api.svg)

6. Натисніть **Зберегти**.

![](../img/integrations-crm/6save.svg)

7. Наступне, це налаштувати внутрішні номери у кабінеті SalesDrive.
[Як налаштувати внутрішні номери?](integration-sales-drive#внутрішні-номери)


### Як згенерувати API Ключ?

1. Перейдіть до кабінету SalesDrive. 
2. Натисніть **Установки**.

![](../img/integrations-crm/7settings.svg)

3. Перейдіть до **Загальні налаштування і інтеграції**.

![](../img/integrations-crm/8globalsettings.svg)

4. Перейдіть до таби **Інші сервіси**.

![](../img/integrations-crm/9tabs.svg)

5. Та натискаємо на **API**.

![](../img/integrations-crm/10api.svg)

6. Натисніть на кнопку **API-ключі**.

![](../img/integrations-crm/11apikeys.svg)

7. Натисніть на кнопку **Створити API-ключ**.

![](../img/integrations-crm/12createapikey.svg)

8. На сторінці створення, введіть назву, наприклад OneVOIPlanet Інтеграція.

![](../img/integrations-crm/13nameinput.svg)

9. Надайте доступ до декільких пунктів:

    a. Заявки: додавання, редагування, читання.
    
    b. Статуси заявки: читання.
    
    c. Дзвінки: додавання та редагування.
    
    d. Дані контакту за номером телефона: читання.

![](../img/integrations-crm/14dostup.svg)

10. Натисніть **Зберегти**.

![](../img/integrations-crm/6save.svg)

11. Після створення, вам згенерується API-ключ, котрий нам потрібен на етапі налаштування в особистому кабінеті OneVOIPlanet.

![](../img/integrations-crm/15apikeygenerated.svg)

### Внутрішні номери
Вкажіть внутрішні номери для кожного менеджера у розділі **Телефонія** загальних налаштувань SalesDrive.

![](../img/integrations-crm/16tabs.svg)

У полі **Внутрішній номер** слід вказувати номер SIP-акаунту OneVOIPlanet.

![](../img/integrations-crm/17manager.svg)

Наприклад: 000domainc000

Номери SIP-акаунтів знайдіть у особистому кабінеті OneVOIPlanet натисніть **Співробітники**.

![](../img/integrations-crm/side-bar-employee-tab.svg)

Беремо номер SIP акаунту співробітника (менеджера), та додаємо **domain** назву вашого домена. Та в нас виходить 000domainc261.

![](../img/integrations-crm/19example.svg)

Для додавання декільких співробітників (менеджерів), спочатку додайте менеджерів в SalesDrive, та після того, введіть внутрішні лінії до кожного менеджера.

![](../img/integrations-crm/20set-managers.svg)

**Інтеграцію успішно налаштовано**.
