export type PageRouterPathRecord = {
  Menu1: '/Menu1';
  Menu2: '/menu2';
  Menu3: '/menu3';
  Menu4: '/menu4';
};

export type PageRouterPath = PageRouterPathRecord[keyof PageRouterPathRecord];
