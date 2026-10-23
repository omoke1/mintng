"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ArrowUpRight, ShieldCheck, Smartphone, Building2 } from "lucide-react";

export function MintHeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden bg-[#fbfaf8] dark:bg-[#101214]">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#c9f4e0] text-[#06281c] text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-[#18a574]" />
              CBN Licensed · NDIC Insured Microfinance Bank
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#17181a] dark:text-[#f1efea] leading-[1.1]">
              Digital banking for Nigerians <br />
              <span className="text-[#8a8b8e]">and the businesses they run</span>
            </h1>
            <p className="max-w-xl mx-auto mt-5 text-sm sm:text-base text-[#3f5a4e] dark:text-[#a5a7ab]">
              Open an account in minutes. Save, borrow, pay and get paid from one app,
              backed by a CBN-licensed, NDIC-insured microfinance bank.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#4fd69c] text-[#06281c] font-medium text-sm hover:opacity-95 transition-opacity"
              >
                Open an account
              </a>
              <a
                href="#app"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-transparent border border-[#06281c33] dark:border-[#ffffff33] text-[#17181a] dark:text-[#f1efea] font-medium text-sm hover:bg-black/5 transition-colors"
              >
                Get the app
              </a>
            </div>
          </div>
        }
      >
        {/* Mint App Dashboard Card Mockup with Authentic Mint Brand Elements */}
        <div className="h-full w-full bg-[#0e1013] text-[#f1efea] p-4 sm:p-8 flex flex-col justify-between rounded-xl overflow-hidden font-sans border border-[#ffffff15] shadow-inner">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#ffffff15]">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-[4px] border-2 border-[#4fd69c] flex items-center justify-center">
                <div className="w-2 h-2 bg-[#4fd69c] rounded-[2px]" />
              </div>
              <span className="font-semibold text-base tracking-tight text-white">Mint Business</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#8a8b8e]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#ffffff10] text-[#4fd69c]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4fd69c] animate-pulse" /> Live Settlement
              </span>
              <span>Port Harcourt, NG</span>
            </div>
          </div>

          {/* Core Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="p-4 rounded-xl bg-[#191c20] border border-[#ffffff10]">
              <span className="text-xs text-[#8a8b8e]">Total Available Balance</span>
              <div className="text-2xl sm:text-3xl font-semibold text-white mt-1">₦1,284,500.00</div>
              <div className="text-xs text-[#4fd69c] mt-2 flex items-center gap-1">
                <ArrowUpRight className="w-3.5 h-3.5" /> +14.2% from last week
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#191c20] border border-[#ffffff10]">
              <span className="text-xs text-[#8a8b8e]">Active Working Capital Loan</span>
              <div className="text-2xl sm:text-3xl font-semibold text-white mt-1">₦2,500,000.00</div>
              <div className="text-xs text-[#8a8b8e] mt-2">Next scheduled repayment in 12 days</div>
            </div>

            <div className="p-4 rounded-xl bg-[#191c20] border border-[#ffffff10]">
              <span className="text-xs text-[#8a8b8e]">POS & Direct Collections</span>
              <div className="text-2xl sm:text-3xl font-semibold text-[#4fd69c] mt-1">₦462,300.00</div>
              <div className="text-xs text-[#8a8b8e] mt-2">58% monthly target reached</div>
            </div>
          </div>

          {/* Activity Ledger */}
          <div className="rounded-xl bg-[#141619] border border-[#ffffff0f] p-4 text-xs">
            <div className="text-[#8a8b8e] font-medium mb-3">Today's Transactions</div>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between py-1.5 border-b border-[#ffffff0a]">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-[#4fd69c]/20 text-[#4fd69c] font-medium">POS</span>
                  <span>Store Terminal #04 Settlement</span>
                </div>
                <span className="text-[#4fd69c] font-medium">+₦85,000.00</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#ffffff0a]">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-[#ffffff15] text-[#8a8b8e]">Transfer</span>
                  <span>Inventory Supplier Transfer</span>
                </div>
                <span className="text-white/80 font-medium">-₦120,000.00</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-[#4fd69c]/20 text-[#4fd69c] font-medium">Goal</span>
                  <span>Automated Shop Rent Savings Deposit</span>
                </div>
                <span className="text-[#4fd69c] font-medium">+₦25,000.00</span>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
