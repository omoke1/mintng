"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Check, ChevronDown, Languages, Menu, X, ShieldCheck } from "lucide-react";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";

type MegaColumn = {
  eyebrow: string;
  links: { label: string; href: string; active?: boolean; badge?: string; desc?: string }[];
};

type MegaMenu = {
  columns: MegaColumn[];
  footerLinks?: { label: string; href: string }[];
  showSocials?: boolean;
  image: { src: string; alt: string };
  imageCaption?: string;
};

const BANKING_MENU: MegaMenu = {
  columns: [
    {
      eyebrow: "Personal Banking",
      links: [
        { label: "Current Account", href: "#cta", active: true, desc: "Zero fees, no minimum balance" },
        { label: "Savings Account", href: "#savings", badge: "Up to 15%", desc: "High-yield goal based savings" },
      ],
    },
    {
      eyebrow: "Business & Security",
      links: [
        { label: "Small Business Banking", href: "#products", desc: "Bulk payments & POS settlements" },
        { label: "Secure Banking", href: "#about", badge: "CBN / NDIC", desc: "Insured & 24/7 fraud monitoring" },
      ],
    },
  ],
  footerLinks: [
    { label: "CBN Licensed Microfinance Bank", href: "#about" },
    { label: "Deposits Insured by NDIC", href: "#about" },
  ],
  showSocials: true,
  image: {
    src: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
    alt: "Mint Business App",
  },
  imageCaption: "Digital banking for Nigerians and the businesses they run",
};

const LOANS_MENU: MegaMenu = {
  columns: [
    {
      eyebrow: "Credit Products",
      links: [
        { label: "Instant Business Loans", href: "#loans", active: true, badge: "Up to ₦10M" },
        { label: "Working Capital", href: "#loans" },
        { label: "Supplier Financing", href: "#loans" },
      ],
    },
    {
      eyebrow: "Support",
      links: [
        { label: "Repayment Calculator", href: "#loans" },
        { label: "Eligibility Checklist", href: "#loans" },
      ],
    },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    alt: "Loan preview",
  },
  imageCaption: "Grow your business with scheduled credit",
};

const RESOURCES_MENU: MegaMenu = {
  columns: [
    {
      eyebrow: "Learn",
      links: [
        { label: "Banking Guides", href: "#products" },
        { label: "POS Terminal Setup", href: "#products" },
        { label: "Savings Tips", href: "#savings" },
      ],
    },
    {
      eyebrow: "Help & Legal",
      links: [
        { label: "Port Harcourt Branch Support", href: "#cta" },
        { label: "Security & Anti-Fraud Info", href: "#about" },
        { label: "Regulatory Compliance", href: "#about" },
      ],
    },
  ],
  footerLinks: [{ label: "Port Harcourt, Rivers State · Nigeria", href: "#cta" }],
  image: {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    alt: "Support preview",
  },
  imageCaption: "Local support from our Port Harcourt team",
};

const MEGA_MENUS: Record<string, MegaMenu> = {
  Banking: BANKING_MENU,
  Loans: LOANS_MENU,
  Resources: RESOURCES_MENU,
};

const NAV_ITEMS = [
  { label: "Banking", hasMenu: true },
  { label: "Loans", hasMenu: true },
  { label: "Resources", hasMenu: true },
  { label: "About", hasMenu: false, href: "#about" },
  { label: "Contact", hasMenu: false, href: "#cta" },
] as const;

const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "NG", label: "Pidgin" },
  { code: "YO", label: "Yorùbá" },
  { code: "HA", label: "Hausa" },
  { code: "IG", label: "Igbo" },
] as const;

export default function MintNavbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]>(LANGUAGES[0]);
  const langRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (label: string, hasMenu: boolean) => {
    if (!hasMenu) {
      setOpenMenu(null);
      return;
    }
    setLangOpen(false);
    setOpenMenu((current) => (current === label ? null : label));
  };

  useEffect(() => {
    if (!langOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [langOpen]);

  const activeMenu = openMenu ? MEGA_MENUS[openMenu] : null;

  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 py-3 bg-[#fbfaf8]/90 dark:bg-[#101214]/90 backdrop-blur-md border-b border-[#e8e5df] dark:border-[#2a2d32]">
      <div className="w-full max-w-7xl">
        <motion.div
          layout
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-2xl border border-[#e8e5df] dark:border-[#2a2d32] bg-white dark:bg-[#191c20] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)]"
        >
          {/* Top row */}
          <div className="flex items-center justify-between gap-4 px-6 py-3.5">
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center gap-2">
              <span className="w-5 h-5 rounded-[5px] border-[3px] border-[#17181a] dark:border-[#f1efea] block" />
              <span className="text-xl font-semibold tracking-tight text-[#17181a] dark:text-[#f1efea]">
                Mint
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) => {
                const isOpen = openMenu === item.label;
                if (!item.hasMenu) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href ?? "#"}
                      onClick={() => toggleMenu(item.label, false)}
                      className="rounded-full px-4 py-1.5 text-sm font-medium text-[#8a8b8e] hover:text-[#17181a] dark:hover:text-[#f1efea] transition-colors"
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <button
                    key={item.label}
                    onClick={() => toggleMenu(item.label, item.hasMenu)}
                    aria-expanded={isOpen}
                    className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      isOpen
                        ? "bg-[#17181a] text-white dark:bg-[#f1efea] dark:text-[#101214]"
                        : "text-[#8a8b8e] hover:bg-black/5 dark:hover:bg-white/5 hover:text-[#17181a] dark:hover:text-[#f1efea]"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => {
                    setOpenMenu(null);
                    setLangOpen((v) => !v);
                  }}
                  aria-expanded={langOpen}
                  className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-[#8a8b8e] hover:bg-black/5 transition-colors"
                >
                  <Languages className="h-3.5 w-3.5" />
                  {language.code}
                  <ChevronDown className={`h-3 w-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      className="absolute right-0 top-full z-20 mt-2 w-40 overflow-hidden rounded-xl border border-[#e8e5df] dark:border-[#2a2d32] bg-white dark:bg-[#191c20] p-1.5 shadow-xl"
                    >
                      {LANGUAGES.map((lng) => (
                        <button
                          key={lng.code}
                          onClick={() => {
                            setLanguage(lng);
                            setLangOpen(false);
                          }}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-medium text-[#17181a] dark:text-[#f1efea] hover:bg-black/5"
                        >
                          <span>{lng.label} ({lng.code})</span>
                          {lng.code === language.code && <Check className="h-3.5 w-3.5 text-[#18a574]" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="#app"
                className="rounded-lg border border-[#e8e5df] dark:border-[#2a2d32] px-4 py-2 text-xs font-semibold text-[#17181a] dark:text-[#f1efea] hover:bg-black/5 transition-colors"
              >
                Sign In
              </Link>

              <Link
                href="#cta"
                className="rounded-lg bg-[#4fd69c] text-[#06281c] px-4 py-2 text-xs font-semibold hover:opacity-95 transition-opacity"
              >
                Open account
              </Link>
            </div>

            {/* Mobile trigger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex items-center justify-center p-2 text-[#17181a] dark:text-[#f1efea] lg:hidden"
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Desktop mega dropdown */}
          <AnimatePresence initial={false}>
            {activeMenu && (
              <motion.div
                key={openMenu}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="hidden overflow-hidden lg:block border-t border-[#e8e5df] dark:border-[#2a2d32]"
              >
                <div className="grid grid-cols-[1.1fr_1.1fr_auto] gap-10 px-8 pb-8 pt-6">
                  {activeMenu.columns.map((col, colIdx) => (
                    <div key={col.eyebrow} className="flex flex-col gap-4">
                      <span className="w-fit rounded-full bg-[#fbfaf8] dark:bg-[#101214] border border-[#e8e5df] dark:border-[#2a2d32] px-3 py-1 text-xs font-medium text-[#8a8b8e]">
                        {col.eyebrow}
                      </span>
                      <ul className="flex flex-col gap-3.5">
                        {col.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="group flex flex-col gap-0.5 text-[#17181a] dark:text-[#f1efea] hover:text-[#18a574] transition-colors"
                            >
                              <div className="flex items-center gap-2 font-medium text-base">
                                {link.label}
                                {link.badge && (
                                  <span className="rounded-full bg-[#4fd69c]/20 text-[#0f9d6b] px-2 py-0.5 text-[10px] font-semibold">
                                    {link.badge}
                                  </span>
                                )}
                              </div>
                              {link.desc && (
                                <span className="text-xs text-[#8a8b8e] font-normal">{link.desc}</span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      {colIdx === activeMenu.columns.length - 1 && activeMenu.footerLinks && (
                        <div className="mt-auto flex flex-col gap-1.5 pt-8 text-xs text-[#8a8b8e]">
                          {activeMenu.footerLinks.map((item) => (
                            <Link key={item.label} href={item.href} className="hover:text-[#18a574]">
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Preview image */}
                  <div className="relative hidden h-56 w-72 flex-col justify-end overflow-hidden rounded-xl border border-[#e8e5df] dark:border-[#2a2d32] md:flex">
                    <img
                      src={activeMenu.image.src}
                      alt={activeMenu.image.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    {activeMenu.imageCaption && (
                      <div className="relative z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-10">
                        <p className="text-xs font-medium text-white">{activeMenu.imageCaption}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
}
