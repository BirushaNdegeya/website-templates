import React from "react";
import { Button } from "../ui/button";

function TemplateCard({ template, onSelect }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
      <div className="aspect-video overflow-hidden">
        <img
          src={template.imageUrl}
          alt={template.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{template.title}</h3>
          <p className="mb-4">{template.description}</p>
          <div className="flex gap-4">
            <Button 
              onClick={() => onSelect(template)}
              variant="default"
              className="bg-primary hover:bg-primary/90"
            >
              Aperçu
            </Button>
            <Button
              onClick={() => window.open(template.infoUrl, '_blank')}
              variant="outline"
              className="bg-white/10 hover:bg-white/20 border-white"
            >
              Plus d'infos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateCard;
