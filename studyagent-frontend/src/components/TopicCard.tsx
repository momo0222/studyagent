import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FolderOpen, FileText, Brain, Calendar, MoreHorizontal, BookOpen, Calculator, History, GraduationCap } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

interface Topic {
  id: string;
  name: string;
  subject: string;
  color: string;
  originalNotesCount: number;
  processedNotesCount: number;
  lastUpdated: string;
  totalNotes: number;
  created_at: string;
}

interface TopicCardProps {
  topic: Topic;
  onView: (topic: Topic) => void;
  onUploadToTopic: (topic: Topic) => void;
}

export function TopicCard({ topic, onView, onUploadToTopic }: TopicCardProps) {
  const getSubjectIcon = (subject: string) => {
    switch (subject.toLowerCase()) {
      case 'biology':
        return BookOpen;
      case 'mathematics':
        return Calculator;
      case 'history':
        return History;
      case 'computer science':
        return BookOpen;
      default:
        return BookOpen;
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all cursor-pointer border border-border bg-card">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${topic.color}20`, border: `2px solid ${topic.color}` }}
            >
              {React.createElement(getSubjectIcon(topic.subject), { className: "h-6 w-6", style: { color: topic.color } })}
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-foreground">{topic.name}</h3>
              <Badge 
                variant="outline" 
                className="text-xs"
                style={{ borderColor: topic.color, color: topic.color }}
              >
                {topic.subject}
              </Badge>
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onView(topic)}>
                <FolderOpen className="mr-2 h-4 w-4" />
                Open Topic
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onUploadToTopic(topic)}>
                <FileText className="mr-2 h-4 w-4" />
                Add Note
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="space-y-4" onClick={() => onView(topic)}>
        {/* Folder Structure Preview */}
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Classes</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              {topic.originalNotesCount}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Total Notes</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              {topic.totalNotes}
            </Badge>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-border">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>Updated {topic.lastUpdated}</span>
          </div>
          <span>{topic.totalNotes} total notes</span>
        </div>

        {/* Action Button */}
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            onView(topic);
          }}
        >
          <FolderOpen className="mr-2 h-4 w-4" />
          Open Topic
        </Button>
      </CardContent>
    </Card>
  );
}