import { Download, Fullscreen, Copy, GitFork, Check } from "lucide-react";
import { Button } from "./ui/button";
import { useRef, useState } from "react";

export function Iframe({ templateLink }: { templateLink: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleFullscreen = () => {
    if (iframeRef.current) {
      iframeRef.current.requestFullscreen().catch((err) => {
        console.error('Erreur lors du passage en plein écran:', err);
      });
    }
  };

  const handleDownload = () => {
    // Téléchargement du template
    const templateUrl = templateLink;
    fetch(templateUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'template-aroma.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch(err => console.error('Erreur lors du téléchargement:', err));
  };

  const handleCopyCode = async () => {
    try {
      const response = await fetch(templateLink);
      const text = await response.text();
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 5000); // Retour à l'icône originale après 5 secondes
    } catch (err) {
      console.error('Erreur lors de la copie du code:', err);
    }
  };

  const handleFork = () => {
    // Ici vous pouvez implémenter la logique de fork
    // Par exemple, créer une copie du template dans l'espace de travail de l'utilisateur
    console.log('Fork functionality to be implemented');
  };

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="flex justify-between items-center border-b border-border p-2">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={handleDownload}
            title="Télécharger le template"
          >
            <Download className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            onClick={handleFullscreen}
            title="Voir en plein écran"
          >
            <Fullscreen className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            onClick={handleCopyCode}
            title={isCopied ? "Code copié!" : "Copier le code"}
          >
            {isCopied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>

          <Button
            variant="outline"
            onClick={handleFork}
            title="Fork le template"
          >
            <GitFork className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="overflow-hidden">
        <iframe
          ref={iframeRef}
          src={templateLink}
          className="w-full transition-all duration-500 ease-in-out h-[450px] [&]::-webkit-scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          allowFullScreen={true}
          loading="lazy"
        />
      </div>
    </div>
  );
}