export type LayoutProps = {
  children: React.ReactNode;
};

export interface SidebarItemProps {
  item: SidebarItem;
  isSelected: boolean;
  onClick: (name: string, url: string) => void;
}

export interface CardWrapperProps {
  isDark: boolean;
}

export interface ToggleButtonProps {
  isDark: boolean;
}

export interface CardComponentProps {
  isDark: boolean;
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
}

export interface User {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

export interface CarouselProps {
  users: User[];
}

export interface User {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

export type HeaderProps = {
  title: string;
};

export type MainContentProps = {
  children: React.ReactNode;
  title: string;
};

export type SidebarItem = {
  icon: JSX.Element;
  name: string;
  url: string;
};
