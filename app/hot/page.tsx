'use client'

import AnimationCard from "@/components/animation_card";

export default function HotPage() {

  return <div className=" flex gap-5">
    <AnimationCard className="size-[500px]">1</AnimationCard>
    <AnimationCard className="size-[500px]">2</AnimationCard>
    <AnimationCard className="size-[500px]">3</AnimationCard>
  </div>
}

