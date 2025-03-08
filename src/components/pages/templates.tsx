import { templates } from "@/assets/data"
import { Iframe } from "../cards/iframe"

export default function Templates() {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templates.map((template, index) => (
          <Iframe
            key={index}
            templateLink={template.link}
            authorGithub={template.authorGithub}
            authorURLImage={template.authorURLImage}
            github={template.github}
          />
        ))}
      </div>
    </div>
  )
}