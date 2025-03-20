import { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string | string[];
  typingSpeed?: number;
  backspaceSpeed?: number;
  delayAfterText?: number;
  className?: string;
  loop?: boolean;
  cursor?: boolean;
}

export function TypingAnimation({
  text,
  typingSpeed = 80,
  backspaceSpeed = 40,
  delayAfterText = 1500,
  className = "",
  loop = true,
  cursor = true,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = Array.isArray(text) ? text : [text];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = texts[currentIndex];
    
    if (isTyping && !isDeleting) {
      if (displayText !== currentText) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          if (loop || currentIndex < texts.length - 1) {
            setIsDeleting(true);
          }
        }, delayAfterText);
      }
    } else if (isDeleting) {
      if (displayText) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        }, backspaceSpeed);
      } else {
        setIsDeleting(false);
        setIsTyping(true);
        setCurrentIndex((current) => 
          current === texts.length - 1 && loop ? 0 : current + 1
        );
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping, isDeleting, texts, loop, typingSpeed, backspaceSpeed, delayAfterText]);
  
  return (
    <span className={className}>
      {displayText}
      {cursor && (
        <span className="inline-block w-[2px] h-[1em] bg-primary ml-1 animate-pulse">
          &nbsp;
        </span>
      )}
    </span>
  );
}