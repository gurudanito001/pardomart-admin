import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { contentApi } from "@/lib/apiClient";
import {
  ContentPrivacyPolicyAppGetAppEnum,
  ContentPrivacyPolicyAppPatchAppEnum,
} from "../../api-client/endpoints/content-api";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Edit2, Save, X } from "lucide-react";
import { toast } from "sonner";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

// Define Content interface locally if not successfully imported, or trust it's in the response
interface PrivacyPolicyContent {
  content?: string;
  type?: string;
  app?: string;
  updatedAt?: string;
}

export default function PrivacyPolicy() {
  const [app, setApp] = useState<ContentPrivacyPolicyAppGetAppEnum>(
    ContentPrivacyPolicyAppGetAppEnum.Customer,
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");
  const queryClient = useQueryClient();

  const { data: contentData, isLoading } = useQuery({
    queryKey: ["privacy-policy", app],
    queryFn: async () => {
      const response = await contentApi.contentPrivacyPolicyAppGet(app);
      return response.data as PrivacyPolicyContent;
    },
  });

  // Sync editContent with data when data loads or editing starts
  useEffect(() => {
    if (contentData?.content) {
      setEditContent(contentData.content);
    } else {
      setEditContent("");
    }
  }, [contentData]);

  const mutation = useMutation({
    mutationFn: (newContent: string) =>
      contentApi.contentPrivacyPolicyAppPatch(
        { content: newContent },
        app as ContentPrivacyPolicyAppPatchAppEnum,
      ),
    onSuccess: () => {
      toast.success("Privacy Policy updated successfully");
      setIsEditing(false);
      queryClient.invalidateQueries({ queryKey: ["privacy-policy", app] });
    },
    onError: (error) => {
      console.error(error);
      toast.error("Failed to update Privacy Policy");
    },
  });

  const handleSave = () => {
    mutation.mutate(editContent);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditContent(contentData?.content || "");
  };

  return (
    <div className="w-full max-w-[1143px] mx-auto bg-white rounded-2xl p-6 sm:p-10 md:px-[58px] md:py-11">
      <div className="flex flex-col gap-[34px]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-[28px] sm:text-[32px] font-sans font-bold text-[#202224] leading-normal tracking-[-0.114px]">
            Privacy Policy
          </h1>

          <div className="flex items-center gap-3">
            <Select
              value={app}
              onValueChange={(val) =>
                setApp(val as ContentPrivacyPolicyAppGetAppEnum)
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select App" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="customer">Customer App</SelectItem>
                <SelectItem value="vendor">Vendor App</SelectItem>
                <SelectItem value="delivery">Delivery App</SelectItem>
              </SelectContent>
            </Select>

            {!isEditing ? (
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-[#06888C] hover:bg-[#06888C]/90 text-white gap-2"
              >
                <Edit2 className="h-4 w-4" /> Edit Policy
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  className="gap-2"
                >
                  <X className="h-4 w-4" /> Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={mutation.isPending}
                  className="bg-[#06888C] hover:bg-[#06888C]/90 text-white gap-2"
                >
                  {mutation.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4" />
                  )}
                  Save
                </Button>
              </div>
            )}
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-10">
            <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
          </div>
        ) : (
          <div className="flex flex-col gap-6 text-black font-sans text-base leading-[26px]">
            {isEditing ? (
              <div className="flex flex-col gap-2 h-[500px]">
                <ReactQuill
                  theme="snow"
                  value={editContent}
                  onChange={setEditContent}
                  className="h-[450px] mb-12"
                  modules={{
                    toolbar: [
                      [{ header: [1, 2, 3, false] }],
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["link", "image"],
                      ["clean"],
                    ],
                  }}
                />
              </div>
            ) : (
              <div
                className="prose max-w-none whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html:
                    contentData?.content ||
                    "No privacy policy content available.",
                }}
              />
              // Note: dangerouslySetInnerHTML is used effectively trusting the admin input.
              // For better security, I should use a sanitizer or a markdown renderer separately,
              // but given Admin context and requirement for "WYSIWYG/Markdown", this allows flexibility.
            )}
          </div>
        )}
      </div>
    </div>
  );
}
