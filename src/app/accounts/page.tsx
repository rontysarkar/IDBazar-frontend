"use client";
import { Button } from "@/components/ui/button";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { gamesAccounts, gameFeturedFilters, gamesFilter } from "@/lib/constant";
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Accounts = () => {
  const [currentGame, setCurrentGame] = useState("Select a Game");
  const [value, setValue] = useState([100, 5000]);
  const [priceRangeMenuOpen, setPriceRangeMenuOpen] = useState(false);
  const [allGames, setAllGames] = useState(gamesAccounts);

  useEffect(() => {
    const filtered = gamesAccounts.filter(
      (game) =>
        (currentGame === "Select a Game" ||
          game.game.toLowerCase().includes(currentGame.toLowerCase())) &&
        game.price >= value[0] &&
        game.price <= value[1],
    );

    setAllGames(filtered);
  }, [currentGame, value, gamesAccounts]);

  return (
    <section className="bg-gradient-to-br from-emerald-50 to via-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 pt-1">
        <div className="mt-4 p-6 bg-white rounded-md">
          <div className="pb-4 border-b">
            <div className="relative">
              <Input
                className="py-6 "
                placeholder=" All Game : Efootball Pubg-Mobile  Free-fire "
              />
              <Button
                variant="default"
                className="absolute right-1 top-1/10  bg-emerald-500 hover:bg-emerald-700 rounded-full h-10 w-10"
              >
                <Search />
              </Button>
            </div>

            <div className="mt-4 flex gap-5">
              <div className="md:max-w-40">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="md:min-w-40">
                    <Button
                      className="border w-full flex justify-between"
                      variant="ghost"
                    >
                      {currentGame}
                      <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="md:min-w-40">
                    {gamesFilter.map((game, idx) => (
                      <DropdownMenuItem
                        onClick={() => {
                          setCurrentGame(game.name);
                          // handleFilters()
                        }}
                        key={idx}
                      >
                        {game.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="max-w-60 ">
                <DropdownMenu
                  open={priceRangeMenuOpen}
                  onOpenChange={setPriceRangeMenuOpen}
                >
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="border md:w-60 flex justify-between"
                      variant="ghost"
                    >
                      Price Range <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <div className="flex md:w-58 p-2 flex-col gap-2 border-b pb-4">
                        {/* <Label htmlFor="slider">Price Range</Label> */}
                        <Slider
                          className="py-4"
                          id="slider"
                          max={5000}
                          min={100}
                          onValueChange={setValue}
                          value={value}
                        />

                        <div className="flex items-center justify-between text-muted-foreground text-sm">
                          <span>৳ {value[0]}</span>
                          <span>৳ {value[1]}</span>
                        </div>
                      </div>
                    </DropdownMenuGroup>
                    <DropdownMenuGroup className="flex justify-between">
                      <Button
                        onClick={() => setPriceRangeMenuOpen(false)}
                        variant="link"
                      >
                        Cancel
                      </Button>
                      <Button variant="link">Show</Button>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white pt-4">
            {allGames.map((acc, idx) => (
              <Link
                key={idx}
                href="#"
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-sm"
              >
                <div className="aspect-video bg-slate-100 relative">
                  <Image
                    src={acc?.src}
                    width={450}
                    height={230}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded-full bg-emerald-100 border text-emerald-700">
                    {acc?.game}
                  </span>
                  {/* <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">{acc.game}</span> */}
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-lg tracking-tighter">
                    {acc?.name}
                  </h3>
                  <div className="text-slate-500 text-sm py-1">
                    Verified Seller • 2 ঘন্টা আগে
                  </div>
                  <div className="text-xl font-extrabold mt-1">
                    ৳ {acc?.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accounts;
