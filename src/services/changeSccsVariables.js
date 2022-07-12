/*
Формат CSS-переменной:
--theme-default-УникальноеИмя # дефолтная переменная
--theme-light-УникальноеИмя # для light
--theme-dark-УникальноеИмя # для dark
--theme-neutral-УникальноеИмя # для neutral
*/

export const changeSccsVariables = (theme) => {
  const root = document.documentElement;
  const cssVariables = ['header', 'bgimage'];

  cssVariables.forEach((el) => {
    root
      .style
      .setProperty
      (`--theme-default-${el}`,
        `var(--theme-${theme}-${el})`);
  })
};