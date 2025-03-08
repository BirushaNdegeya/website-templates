import React from "react";
import TemplateCard from "./cards/template-card";

function TemplateGallery({ templates }) {
  return (
    <section id="templates" className="my-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </section>
  );
}

export default TemplateGallery;