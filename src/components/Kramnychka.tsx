"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import {
  SHOP_BY_CATEGORY,
  SHOP_ITEMS,
  fmtPrice,
  buildTelegramOrder,
} from "@/data/shop";
import { asset } from "@/lib/base";

function Stepper({
  qty,
  onAdd,
  onRemove,
}: {
  qty: number;
  onAdd: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center border border-[#1A1715]/15 rounded-xl overflow-hidden text-[13px] font-bold">
      <button
        onClick={onRemove}
        className="w-10 h-10 flex items-center justify-center hover:bg-[#1A1715]/5 transition-colors active:scale-90"
        aria-label="Remove"
      >
        −
      </button>
      <span className="w-10 text-center font-display">{qty}</span>
      <button
        onClick={onAdd}
        className="w-10 h-10 flex items-center justify-center hover:bg-[#1A1715]/5 transition-colors active:scale-90"
        aria-label="Add"
      >
        +
      </button>
    </div>
  );
}

function CartDrawer({
  open,
  onClose,
  cart,
  setCart,
}: {
  open: boolean;
  onClose: () => void;
  cart: Record<string, number>;
  setCart: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}) {
  const items = useMemo(
    () =>
      Object.entries(cart)
        .filter(([, q]) => q > 0)
        .map(([id, qty]) => ({ ...SHOP_ITEMS.find((x) => x.id === id)!, qty })),
    [cart],
  );

  const total = items.reduce((s, it) => s + it.priceGrn * it.qty, 0);
  const count = items.reduce((s, it) => s + it.qty, 0);

  const setQty = useCallback(
    (id: string, next: number) => {
      setCart((prev) => {
        const copy = { ...prev };
        if (next <= 0) delete copy[id];
        else copy[id] = next;
        return copy;
      });
    },
    [setCart],
  );

  return (
    <>
      {/* overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-[420px] bg-[#FDFAF7] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1A1715]/10">
          <h3 className="font-display font-bold text-[#1A1715] text-[18px]">
            Cart {count > 0 && <span className="text-[#555] text-[14px]">({count})</span>}
          </h3>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#1A1715]/5 transition-colors"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1715" strokeWidth="2" strokeLinecap="square">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* items */}
        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center px-6 text-center">
            <div>
              <p className="font-display font-bold text-[#1A1715] text-[16px] mb-2">
                Your cart is empty
              </p>
              <p className="text-[#555] text-[14px]">Add something tasty</p>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
            {items.map((it) => (
              <div key={it.id} className="flex gap-4">
                <div className="relative w-[72px] h-[54px] shrink-0 rounded-xl overflow-hidden bg-[#1A1715]/5">
                  <Image
                    src={asset(it.imageUrl)}
                    alt={it.name}
                    fill
                    className="object-cover"
                    sizes="72px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-bold text-[#1A1715] text-[13px] leading-tight truncate">
                    {it.name.replace(/^[\p{Emoji}\u200d\ufe0f]+\s*/u, "")}
                  </p>
                  <p className="text-[#555] text-[12px] mt-0.5">
                    {fmtPrice(it.priceGrn)} / {it.weight} {it.weightType}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <Stepper
                      qty={it.qty}
                      onAdd={() => setQty(it.id, it.qty + 1)}
                      onRemove={() => setQty(it.id, it.qty - 1)}
                    />
                    <p className="font-display font-bold text-[#1A1715] text-[14px]">
                      {fmtPrice(it.priceGrn * it.qty)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* footer */}
        {items.length > 0 && (
          <div className="border-t border-[#1A1715]/10 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-display font-bold text-[#1A1715] text-[15px]">Total</p>
              <p className="font-display font-extrabold text-[#1A1715] text-[18px]">
                {fmtPrice(total)}
              </p>
            </div>

            <a
              href={buildTelegramOrder(cart)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--yellow btn--block"
            >
              Order via Telegram
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                <path d="M18 8l4 4-4 4M6 20V11a1 1 0 0 1 1-1h11" />
              </svg>
            </a>

            <button
              onClick={() => setCart({})}
              className="w-full text-center text-[#555] text-[13px] font-bold underline-anim"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default function Kramnychka() {
  const [cart, setCart] = useState<Record<string, number>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const saved = localStorage.getItem("druh-shop-cart");
      return saved ? (JSON.parse(saved) as Record<string, number>) : {};
    } catch {
      return {};
    }
  });
  const [drawerOpen, setDrawerOpen] = useState(false);

  /* persist */
  useEffect(() => {
    localStorage.setItem("druh-shop-cart", JSON.stringify(cart));
  }, [cart]);

  const cartCount = useMemo(
    () => Object.values(cart).reduce((s, q) => s + q, 0),
    [cart],
  );

  const addItem = useCallback((id: string) => {
    setCart((p) => ({ ...p, [id]: (p[id] || 0) + 1 }));
  }, []);

  const removeItem = useCallback((id: string) => {
    setCart((p) => {
      const next = { ...p };
      next[id] = (next[id] || 1) - 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });
  }, []);

  return (
    <section className="py-16 lg:py-32 px-5 sm:px-8 lg:px-10 bg-[#ebe859]">
      <div className="max-w-[1200px] mx-auto space-y-12 lg:space-y-20">
        {SHOP_BY_CATEGORY.map((cat) => (
          <div key={cat.id}>
            <div className="section-head">
              <span className="eyebrow eyebrow--ink">Little shop</span>
              <h2
                className="h-section"
              >
                {cat.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {cat.items.map((it) => {
                const qty = cart[it.id] || 0;
                return (
                  <div
                    key={it.id}
                    className="card-lift group flex flex-col"
                  >
                    {/* image */}
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={asset(it.imageUrl)}
                        alt={it.name}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>

                    {/* body */}
                    <div className="p-5 flex flex-col flex-1">
                      <p className="font-display font-bold text-[#1A1715] text-[15px] leading-snug mb-1.5">
                        {it.name}
                      </p>
                      <p className="text-[#1A1715]/80 text-[12px] leading-[1.6] mb-4 line-clamp-3">
                        {it.description.replace(/\n+/g, " · ").replace(/Tasting notes: /, "")}
                      </p>
                      <div className="mt-auto flex items-end justify-between gap-3">
                        <div>
                          <p className="font-display font-extrabold text-[#1A1715] text-[18px]">
                            {fmtPrice(it.priceGrn)}
                          </p>
                          <p className="text-[#1A1715]/80 text-[12px]">
                            {it.weight} {it.weightType}
                            {it.kcal ? ` · ${it.kcal} kcal` : ""}
                          </p>
                        </div>
                        {qty === 0 ? (
                          <button
                            onClick={() => addItem(it.id)}
                            className="shine shrink-0 btn btn--sm btn--yellow"
                          >
                            Add
                          </button>
                        ) : (
                          <Stepper
                            qty={qty}
                            onAdd={() => addItem(it.id)}
                            onRemove={() => removeItem(it.id)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* floating cart button */}
      <button
        onClick={() => setDrawerOpen(true)}
        className={`fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#187492] text-white flex items-center justify-center shadow-lg hover:bg-[#155f78] hover:scale-110 hover:rotate-6 active:scale-90 transition-all duration-300 ${
          cartCount > 0 ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        }`}
        aria-label="Open cart"
      >
        {/* bag icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#ebe859] text-[#1A1715] text-[11px] font-bold flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>

      <CartDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        cart={cart}
        setCart={setCart}
      />
    </section>
  );
}