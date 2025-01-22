"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Zap, Layout, Layers, Lock } from "lucide-react"
import Image from "next/image"

export default function Page() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const openDiscord = () => {
    window.open("https://discord.gg/6nG5TTHpeG", "_blank")
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div
        className={`container mx-auto px-4 py-8 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {/* Hero Section */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-red-500">Star Devs</h1>

        <div className="w-48 h-48 mx-auto mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Card_Black-lz1gloIdX0hJILHkB0hQmyZJPPRd1h.gif"
            alt="Card animation"
            width={192}
            height={192}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Main Panel */}
        <Card className="bg-zinc-900 border-red-500/20 max-w-2xl mx-auto mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-red-500">Ultimate Devs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-zinc-400">A Ultimate Developer Team »» Star Devs.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="destructive" className="w-full sm:w-auto">
                    Buy Cryz
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 border-red-500/20">
                  <DialogHeader>
                    <DialogTitle className="text-red-500">Select Payment Method</DialogTitle>
                  </DialogHeader>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select payment option" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900">
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="robux">Robux</SelectItem>
                      <SelectItem value="paysafe">Paysafe</SelectItem>
                      <SelectItem value="nitro">Nitro</SelectItem>
                    </SelectContent>
                  </Select>
                </DialogContent>
              </Dialog>

              <Button
                variant="outline"
                className="w-full sm:w-auto border-red-500 text-red-500 hover:bg-red-500/10"
                onClick={openDiscord}
              >
                Dev Support
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Feature Panels */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-zinc-900 border-red-500/20">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Shield className="h-12 w-12 text-red-500" />
                <h3 className="text-xl font-semibold">Undetected</h3>
                <p className="text-zinc-400">
                  Advanced protection systems ensuring your gaming experience remains undetected and secure.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-red-500/20">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Zap className="h-12 w-12 text-red-500" />
                <h3 className="text-xl font-semibold">Lightning Fast</h3>
                <p className="text-zinc-400">
                  Optimized for speed with instant execution and minimal impact on performance.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-red-500/20">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Layout className="h-12 w-12 text-red-500" />
                <h3 className="text-xl font-semibold">Clean UI Interface</h3>
                <p className="text-zinc-400">Modern and intuitive scripthub design for the best user experience.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Advanced Features */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-red-500">Advanced Features</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="bg-zinc-900 border-red-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Layers className="h-8 w-8 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Multi-Instance Support</h3>
                    <p className="text-sm text-zinc-400">
                      Run multiple instances simultaneously with optimal performance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-red-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Lock className="h-8 w-8 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Security Features</h3>
                    <p className="text-sm text-zinc-400">Advanced protection and encryption for your safety</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-zinc-400">
          <p>Star Devs - Have the Best Gaming Experience</p>
        </footer>
      </div>
    </div>
  )
}

