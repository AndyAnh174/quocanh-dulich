# Sử dụng Node làm base image
FROM node:20-alpine as build

# Tạo thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy source code
COPY . .

# Build ứng dụng
RUN npm run build

# Sử dụng Node để chạy ứng dụng
FROM node:20-alpine

# Tạo thư mục làm việc
WORKDIR /app

# Cài đặt serve - một server HTTP đơn giản
RUN npm install -g serve

# Copy thư mục build từ stage trước
COPY --from=build /app/dist /app/dist

# Mở port 5173
EXPOSE 5173

# Chạy ứng dụng với serve trên port 5173
CMD ["serve", "-s", "dist", "-l", "5173"] 