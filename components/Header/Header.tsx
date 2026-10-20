"use client";

import { useState } from "react";
import Icon from "../ui/Icon/Icon";
import css from "./Header.module.css";
import Link from "next/link";
import Container from "../Container/Container";

export default function Header() {
  const links = [
    { label: "News", href: "/news" },
    { label: "Find pet", href: "/find-pet" },
    { label: "Our friends", href: "/our-friends" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className={css.header}>
      <Container classname={css.container}>
        <Link href={"/"} className={css.home}>
          <Icon name="logo" className={css.logo} />
        </Link>

        <nav className={`${css.nav} ${isOpen ? css.navOpen : ""}`}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={close}>
              {label}
            </Link>
          ))}
        </nav>
        <div className={css.actions}>
          <div className={css.avatar}>
            <Icon className={css.avatarIcon} name="user" />
          </div>
          <button className={css.burger} onClick={toggle}>
            <Icon
              name={isOpen ? "cross-small" : "menu"}
              className={css.burgerIcon}
            />
          </button>
        </div>
      </Container>
    </header>
  );
}
