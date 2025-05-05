import { MessageSquare, ArrowUp, ArrowDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function RedditPosts() {
  const posts = [
    {
      content: "Been here for 2 years and I still can't find CN2101 every time.",
      username: "lost_sophomore",
      upvotes: 127,
      comments: 43,
      timeAgo: "2 days ago",
    },
    {
      content: "Missed my club meeting again because I couldn't find the right event room.",
      username: "club_enthusiast",
      upvotes: 89,
      comments: 31,
      timeAgo: "1 week ago",
    },
    {
      content: "Are there any events going on tonight?",
      username: "bored_freshman",
      upvotes: 56,
      comments: 24,
      timeAgo: "5 hours ago",
    },
    {
      content: "I wish someone would just show me the fastest route to the Financial Aid office.",
      username: "scholarship_seeker",
      upvotes: 215,
      comments: 67,
      timeAgo: "3 days ago",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 w-full max-w-4xl mx-auto">
      {posts.map((post, index) => (
        <Card key={index} className="border border-slate-200 rounded-xl overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-slate-50 p-3 flex items-center gap-2 border-b border-slate-200">
              <div className="flex flex-col items-center mr-2">
                <ArrowUp className="h-4 w-4 text-slate-500" />
                <span className="text-xs font-medium">{post.upvotes}</span>
                <ArrowDown className="h-4 w-4 text-slate-500" />
              </div>
              <div>
                <span className="text-xs text-slate-500">
                  Posted by u/{post.username} • {post.timeAgo}
                </span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-base font-medium">{post.content}</p>
              <div className="flex items-center mt-3 text-slate-500">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span className="text-xs">{post.comments} comments</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
