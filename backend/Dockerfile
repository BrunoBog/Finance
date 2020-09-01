FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["finance.csproj", "./"]
RUN dotnet restore "./finance.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "finance.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "finance.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "finance.dll"]
