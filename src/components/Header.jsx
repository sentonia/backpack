import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ totalNumberOfItems, totalPackedItems }) {
  return (
    <header>
      <Logo />
      <Counter totalNumberOfItems={totalNumberOfItems} totalPackedItems={totalPackedItems} />
    </header>
  );
}
