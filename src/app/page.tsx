'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Clock, Search, Shield, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Featured from "./components/Featured";

export default function Home() {

  const features = [
    {
      icon: Shield,
      title: 'Secure Escrow System',
      description: 'Your money stays safe in escrow until the transaction is complete'
    },
    {
      icon: Users,
      title: 'Verified Sellers',
      description: 'Trade with confidence using our seller verification system'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Get your gaming account delivered within 24 hours'
    },
    {
      icon: Zap,
      title: 'Instant Chat',
      description: 'Connect with buyers and sellers through our messaging system'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '25,000+', label: 'Successful Trades' },
    { number: '50+', label: 'Supported Games' },
    { number: '99.8%', label: 'Success Rate' }
  ];
  const user = {
    name: ''
  }

  return (
    <main className="min-h-screen">
      <Banner/>
      <Categories/>
      <Featured/>
    </main>
  );
}
