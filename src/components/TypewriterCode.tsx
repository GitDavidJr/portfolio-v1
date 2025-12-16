import { useState, useEffect, useCallback, type JSX } from 'react';

const skillSets = [
    ['Java', 'Node', '...'],
    ['React', 'Next.js', '...'],
    ['Docker', 'AWS', '...'],
    ['TypeScript', 'Vue', '...'],
    ['MongoDB', 'Prisma', '...'],
];

export function TypewriterCode() {
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    const getCodeText = useCallback((skills: string[]) => {
        return `const developer = {
  name: "David Júnior",
  role: "Full Stack",
  skills: ["${skills[0]}", "${skills[1]}", ${skills[2]}]
};`;
    }, []);

    // Blinking cursor effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    // Typing/Deleting effect
    useEffect(() => {
        const currentText = getCodeText(skillSets[currentSkillIndex]);

        if (isPaused) {
            const pauseTimeout = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, 3000);
            return () => clearTimeout(pauseTimeout);
        }

        if (isDeleting) {
            if (displayedText.length > 0) {
                const deleteTimeout = setTimeout(() => {
                    setDisplayedText((prev) => prev.slice(0, -1));
                }, 15);
                return () => clearTimeout(deleteTimeout);
            } else {
                setIsDeleting(false);
                setCurrentSkillIndex((prev) => (prev + 1) % skillSets.length);
            }
        } else {
            if (displayedText.length < currentText.length) {
                const typeTimeout = setTimeout(() => {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                }, 40 + Math.random() * 30);
                return () => clearTimeout(typeTimeout);
            } else {
                setIsPaused(true);
            }
        }
    }, [displayedText, isDeleting, isPaused, currentSkillIndex, getCodeText]);

    // Syntax highlighting function - returns array of elements with cursor at end
    const highlightCode = (code: string) => {
        const lines = code.split('\n');

        return lines.map((line, lineIndex) => {
            const isLastLine = lineIndex === lines.length - 1;
            const parts: JSX.Element[] = [];
            let remaining = line;
            let keyIndex = 0;

            const addPart = (text: string, className: string) => {
                if (text) {
                    parts.push(
                        <span key={`${lineIndex}-${keyIndex++}`} className={className}>
                            {text}
                        </span>
                    );
                }
            };

            while (remaining.length > 0) {
                const keywordMatch = remaining.match(/^(const|let|var)\b/);
                if (keywordMatch) {
                    addPart(keywordMatch[0], 'text-purple-400');
                    remaining = remaining.slice(keywordMatch[0].length);
                    continue;
                }

                const varMatch = remaining.match(/^(\s*)(developer)(\s*)/);
                if (varMatch) {
                    addPart(varMatch[1], 'text-slate-400');
                    addPart(varMatch[2], 'text-blue-400');
                    addPart(varMatch[3], 'text-slate-400');
                    remaining = remaining.slice(varMatch[0].length);
                    continue;
                }

                const propMatch = remaining.match(/^(name|role|skills)/);
                if (propMatch) {
                    addPart(propMatch[0], 'text-cyan-400');
                    remaining = remaining.slice(propMatch[0].length);
                    continue;
                }

                const stringMatch = remaining.match(/^"[^"]*"/);
                if (stringMatch) {
                    addPart(stringMatch[0], 'text-green-400');
                    remaining = remaining.slice(stringMatch[0].length);
                    continue;
                }

                const ellipsisMatch = remaining.match(/^\.\.\./);
                if (ellipsisMatch) {
                    addPart(ellipsisMatch[0], 'text-green-400');
                    remaining = remaining.slice(ellipsisMatch[0].length);
                    continue;
                }

                const punctMatch = remaining.match(/^[{}\[\]:;,=]/);
                if (punctMatch) {
                    addPart(punctMatch[0], 'text-slate-400');
                    remaining = remaining.slice(punctMatch[0].length);
                    continue;
                }

                const spaceMatch = remaining.match(/^\s+/);
                if (spaceMatch) {
                    addPart(spaceMatch[0], '');
                    remaining = remaining.slice(spaceMatch[0].length);
                    continue;
                }

                addPart(remaining[0], 'text-slate-300');
                remaining = remaining.slice(1);
            }

            // Add cursor at the end of the last line
            if (isLastLine) {
                parts.push(
                    <span
                        key={`cursor-${lineIndex}`}
                        className={`inline-block w-2 h-4 bg-blue-400 align-middle ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                );
            }

            return (
                <div key={lineIndex} className="whitespace-pre leading-relaxed">
                    {parts}
                </div>
            );
        });
    };

    // Handle empty state with just cursor
    if (displayedText.length === 0) {
        return (
            <div className="min-h-[120px] text-sm">
                <span
                    className={`inline-block w-2 h-4 bg-blue-400 ${showCursor ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            </div>
        );
    }

    return (
        <div className="min-h-[120px] text-sm">
            {highlightCode(displayedText)}
        </div>
    );
}
