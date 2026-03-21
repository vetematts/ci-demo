variable "file_name" {
  description = "The name of the file Terraform will create"
  type        = string
  default     = "hello_file.txt"
}

variable "file_content" {
  description = "The content written into the file"
  type        = string
  default     = "Hello from Terraform Variables!"
}
