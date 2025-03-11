import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("bg-gradient-to-b from-purple-100 to-white py-16", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-[#ff1493] mx-auto mb-6"></div>
          {description && <p className="text-gray-600">{description}</p>}
        </div>
      </div>
    </div>
  )
}

