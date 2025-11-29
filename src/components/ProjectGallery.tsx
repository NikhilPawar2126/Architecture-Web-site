import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProjectGalleryProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    title: string;
}

const ProjectGallery = ({ isOpen, onClose, images, title }: ProjectGalleryProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl h-screen sm:h-[85vh] md:h-[90vh] p-0">
                <DialogTitle className="sr-only">{title} - Photo Gallery</DialogTitle>
                <div className="relative w-full h-full flex items-center justify-center bg-background/95">
                    {/* Close Button */}
                    {/* <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 rounded-full bg-background/80 hover:bg-primary text-white shadow-lg"
                        onClick={onClose}
                    >
                        <X className="h-5 w-5" />
                    </Button> */}

                    {/* Image & navigation */}
                    <div className="relative w-full h-[60vh] sm:h-[75vh] flex items-center justify-center px-0 sm:px-10">
                        <img
                            src={images[currentIndex]}
                            alt={`${title} - Image ${currentIndex + 1}`}
                            className="w-full h-full max-h-[60vh] sm:max-h-[75vh] object-contain rounded-xl shadow-lg transition-all duration-300"
                            style={{ background: "#ecdaf2ff" }}
                        />
                        {/* Navigation buttons */}
                        {images.length > 1 && (
                            <>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background"
                                    onClick={goToPrevious}
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background"
                                    onClick={goToNext}
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </Button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                                    ? "bg-primary w-6"
                                                    : "bg-muted-foreground/30"
                                                }`}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
export default ProjectGallery;
