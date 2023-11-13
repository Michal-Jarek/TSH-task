export interface ProductModalProps {
  name: string;
  description: string;
  image: string;
  promo: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  visible: boolean;
}
