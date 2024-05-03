import DocCard from '@theme/DocCard';
import React from 'react';


const CustomComponent = () => {

  const data = [
    {
      type: 'category',
      description:'Вхід в особистий кабінет, реєстрація, верифікація',
      items: [],
      href:'/authorization-and-verification/sign-in',

      label: 'Авторизація та верифікація'
    },
    {
      type: 'category',
      description:'Створення, редагування, видалення співробітника, алгоритм розподілення дзвінків у групі',
      items: [],
      href:'/employees-groups/employees/create-employee',

      label: 'Співробітники та групи'
    },
    {
      type: 'category',
      description:'Покупка номера, вартість номеру, налаштування вхідного та вихідного напрямку номера',
      items: [],
      href:'/numbers/buy-number',

      label: 'Номери'
    },
    {
      type: 'category',
      description:'Витрати, поповнення, управління тарифом, поповення рахунку',
      items: [],
      href:'/finance/expenses',

      label: 'Фінанси'
    },
    {
      type: 'category',
      description:'Журнал дзвінків, оцінка ефективності роботи, навантаження по годинах, показники обслуговування',
      items: [],
      href:'/statistics/journal-calls',

      label: 'Статистика'
    },
  ]
  return (
      <div style={{display:"flex", flexDirection:'row', flexWrap:'wrap', width:'100%', gap:'20px', marginBottom:'20px'}}>
        {data.map((item) => (
          <div style={{width:'45%', flex:'1 auto'}}>
            <DocCard  item={item}/>
          </div>
        ))}
      </div>
    )
}

export default CustomComponent