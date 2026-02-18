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
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import postsData from "@/data/posts.json";
import categories from "@/data/categories.json";
import { formatDistanceToNow } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Accounts = () => {
  const [priceRangeToggle, setPriceRangeToggle] = useState(false);
  const [priceRangeMenuOpen, setPriceRangeMenuOpen] = useState(false);
  const [currentCategorie, setCurrentCategorie] = useState("accounts");
  const [priceRange, setPriceRange] = useState([100, 5000]);
  const [sortOption, setSortOption] = useState("newest");
  const [posts, setPosts] = useState(postsData);

  useEffect(() => {
    const filtered = postsData.filter(
      (post) =>
        (currentCategorie === "accounts" ||
          post.category.slug
            .toLowerCase()
            .includes(currentCategorie.toLowerCase())) &&
        post.price >= priceRange[0] &&
        post.price <= priceRange[1],
    );

    setPosts(filtered);
  }, [currentCategorie, priceRangeToggle, sortOption]);

  const dateFormat = (dateString: string) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  };

  return (
    <section className="bg-gradient-to-br from-emerald-50 to via-sky-50 to-white pb-5">
      <div className="max-w-7xl mx-auto px-1 md:px-4 md:pt-1">
        <div className="mt-4 p-6 bg-white rounded-md">
          <div className="pb-4 border-b">
            <div className="relative">
              <Input
                className="py-6 focus-visible:ring-0  focus-visible:border-gray-300 "
                placeholder="What are you looking for? "
              />
              <Button
                variant="default"
                className="absolute right-1 top-1/10  bg-emerald-500 hover:bg-emerald-700 rounded-full h-10 w-10"
              >
                <Search />
              </Button>
            </div>

            <div className="mt-4 flex gap-2 md:gap-5 overflow-x-auto whitespace-nowrap no-scrollbar">
              <div className="md:min-w-40 shrink-0">
                <Select
                  value={currentCategorie}
                  onValueChange={setCurrentCategorie}
                >
                  <SelectTrigger className="w-36 md:min-w-40 text-sm">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat, idx) => (
                      <SelectItem key={idx} value={cat?.slug}>
                        {cat?.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="md:min-w-60 shrink-0">
                <DropdownMenu
                  open={priceRangeMenuOpen}
                  onOpenChange={setPriceRangeMenuOpen}
                >
                  <DropdownMenuTrigger asChild className="">
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
                          onValueChange={setPriceRange}
                          value={priceRange}
                        />

                        <div className="flex items-center justify-between text-muted-foreground text-sm">
                          <span>৳ {priceRange[0]}</span>
                          <span>৳ {priceRange[1]}</span>
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
                      <Button
                        onClick={() => {
                          setPriceRangeMenuOpen(false);
                          setPriceRangeToggle((prev) => !prev);
                        }}
                        variant="link"
                      >
                        Show
                      </Button>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="md:min-w-40 shrink-0">
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent className="text-sm">
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white pt-4">
            {posts.map((acc, idx) => (
              <Link
                key={idx}
                href={`/accounts/${acc.slug}`}
                className="rounded-md border border-slate-200 bg-white overflow-hidden hover:shadow-sm"
              >
                <div className="aspect-video bg-slate-100 relative">
                  <Image
                    src={acc?.images[0]}
                    width={450}
                    height={230}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded-full bg-emerald-100 border text-emerald-700">
                    {acc?.category.name}
                  </span>
                  {/* <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">{acc.game}</span> */}
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-lg tracking-tighter">
                    {acc?.category?.name}
                  </h3>
                  <div className="text-slate-500 text-sm py-1">
                    {dateFormat(acc.createdAt)}
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
