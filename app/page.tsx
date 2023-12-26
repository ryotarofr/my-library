import CarouselDemo from '@/components/Crousel/carousel'
import ToggleThemeButton from '@/components/ui/toggle-theme'

export default function Home() {
  return (
    <div>
      <ToggleThemeButton />
      <CarouselDemo />
    </div>
  )
}
